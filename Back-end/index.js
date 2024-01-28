import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import dotenv from 'dotenv';
import Moises from "moises/sdk.js"
import path from 'path';
import pkg from 'pg';
import fs from 'fs';

const { Pool } = pkg;

dotenv.config(); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename).replace(/\\/g, '/');

const apiKey = process.env.API_KEY;
const moises = new Moises({ apiKey })
const port = process.env.PORT;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

const obj_users_session = {};

// Usuário de homologação
const userIdTeste = 1;

// Populando objeto com usuários da sessão
obj_users_session[userIdTeste] = {};

 const apiUrlJob = `https://api.music.ai/api/job/${process.env.JOB_ID_SEP_VOCAL}`;

const app = express();
app.use(express.static('public'));
app.use(express.json());
console.log("Iniciando...");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/mixer', async (req, res) => {
     jobSeparaVozInstrumento(process.env.LOCAL_URL_CARELESS_WHISPER); // Trechos originais e só instrumentais seriam salvos em tabela trecho_base

    try {
      // Atribuição de trecho base para cada player utilizando user ids (sessão) e quantidade de players
      let player_count = Object.keys(obj_users_session).length;

      await pool.query(`SELECT trecho_base_pai_id FROM trecho_base WHERE file_type = 1 LIMIT ${player_count}`
      ).then((response)=>{
        const arr_trecho_base_ids = response.rows.map(row => row.trecho_base_pai_id);
        Object.keys(obj_users_session).forEach((key, index) => {
          obj_users_session[key].trecho_id = arr_trecho_base_ids[index];
        });
      });
      link_song_user(obj_users_session); atribui musica aos usuários da sessão
    } catch (error) {
      console.error('Erro ao atribuir trechos:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
    res.sendFile(path.join(__dirname, 'public', 'mixer.html'));
});

app.get('/song/user/:id', async (req, res) => {
    try {
      const result = await pool.query(`SELECT userid, trecho_base_pai_id, roomid FROM users WHERE userid = ${req.params.id}`);
      res.json(result.rows);
    } catch (error) {
      console.error('Erro ao obter dados do banco:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

async function link_song_user(obj_users_session) {
  try {
    let sql = "";
    Object.keys(obj_users_session).forEach((key, index) => {
      sql += `INSERT INTO users (userid, trecho_base_pai_id, roomid, hostid, sessionstatus) VALUES 
                (${key}, 
                ${obj_users_session[key].trecho_id}, 
                '12345', 
                ${Object.keys(obj_users_session)[0]}, 
                'ACTIVE')`;
    });
    const resultInsercao = await pool.query(sql);

    return { success: true, message: 'Dados inseridos com sucesso!' };
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
    return { success: false, error: 'Erro interno no servidor' };
  }
}

// Function que separa a voz e instrumento. Primeiro add um Job para o Workflow "wf-separacao-vocal-instrumento", 
// depois baixa o resultado para uma pasta local
async function jobSeparaVozInstrumento (url) {
  const downloadUrl = await moises.uploadFile(url)

  const jobId = await moises.addJob(
      `job-${Object.keys(obj_users_session)[0]}`,
      "wf-separacao-vocal-instrumento",
      { inputUrl: downloadUrl }
      )
      
      console.log("Carregando...")
      const job = await moises.waitForJobCompletion(jobId)

      if (job.status === "SUCCEEDED") {
          const files = await moises.downloadJobResults(job, `public/stems/${Object.keys(obj_users_session)[0]}`)
          console.log("Resultado:", files)
      } else {
          console.log("Job falhou!")
      }

      await moises.deleteJob(jobId) 
  }

async function jobJoinAudioFiles (obj) {
  const trecho_instrumental = await moises.uploadFile(obj.trecho_instrumental)
  const user_resultado = await moises.uploadFile(obj.user_resultado)
  const user_index_homologacao = 0;
  const jobId = await moises.addJob(
    `job-${Object.keys(obj_users_session)[user_index_homologacao]}`,
    "wf-join-audio-mix",
    { 
      trecho_instrumental,
      user_resultado/*,
      pad_value: obj.pad_value, 
      pitch_shift_value: obj.pitch_shift_value,
      speed_value: obj.speed_value,
      volume_value: obj.volume_value,
      auto_tune_value: obj.auto_tune_value*/
      // Todos estes settings comentados só são possíveis usar com o modo desenvolvedor habilitado
    }
  )
      
    console.log("Carregando...")
    const job = await moises.waitForJobCompletion(jobId)

    if (job.status === "SUCCEEDED") {
        const files = await moises.downloadJobResults(job, `public/stems/${Object.keys(obj_users_session)[user_index_homologacao]}`)
        //console.log("Resultado:", files)
        try {
            sql = `INSERT INTO trecho_base (trecho_base_pai_id, file_name, file_url, file_type) VALUES 
                      (${obj_users_session[user_index_homologacao].trecho_id}, 
                      'joined_user_result.wav', 
                      ${files}, 
                      3)`;

          const resultInsercao = await pool.query(sql);
      
          return { success: true, message: 'Dados inseridos com sucesso!' };
        } catch (error) {
          console.error('Erro ao inserir dados:', error);
          return { success: false, error: 'Erro interno no servidor' };
        }
    } else {
        console.log("Job falhou!")
    }

      await moises.deleteJob(jobId) 
  }

app.post('/user/result', async (req, res) => {
  let user_id = req.body.user_id;
  const vocal_timing_json = JSON.parse(fs.readFileSync(`public/stems/${user_id}/vocal-timing.json`, 'utf-8'));

  let obj_user_resultado = { 
    trecho_instrumental: `public/stems/${user_id}/instrumental-isolado.wav`,
    user_resultado: `public/stems/${user_id}/resultado_user_${user_id}.wav`,
    pad_value: vocal_timing_json[0].start,
    pitch_shift_value: req.body.pitch_shift_value,
    speed_value: req.body.speed_value,
    volume_value: req.body.volume_value,
    auto_tune_value: req.body.auto_tune_value
  }
  try {
    await jobJoinAudioFiles(obj_user_resultado);
  } catch (error) {
    console.error('Erro ao juntar trechos:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
  res.sendFile(path.join(__dirname, 'public', 'result.html'));
})
