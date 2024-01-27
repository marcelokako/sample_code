import Moises from "moises/sdk.js"
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config(); 

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
obj_users_session[userIdTeste] = {"userId": userIdTeste};

// const apiUrlJob = `https://api.music.ai/api/job/${process.env.JOB_ID_SEP_VOCAL}`;

// Function que separa a voz e instrumento. Primeiro add um Job para o Workflow "wf-separacao-vocal-instrumento", 
// depois baixa o resultado para uma pasta local
async function jobSeparaVozInstrumento (url) {
    const downloadUrl = await moises.uploadFile(url)

    const jobId = await moises.addJob(
        `job-${obj_users_session[userIdTeste].userId}`,
        "wf-separacao-vocal-instrumento",
        { inputUrl: downloadUrl }
        )
        
        const job = await moises.waitForJobCompletion(jobId)
        
        if (job.status === "SUCCEEDED") {
            console.log("Carregando...")
            const files = await moises.downloadJobResults(job, `.public/stems/${obj_users_session[userIdTeste].userId}`)
            console.log("Resultado:", files)
        } else {
            console.log("Job falhou!")
        }

        await moises.deleteJob(jobId)
        
    }

const app = express();
app.use(express.static('public'));
console.log("Iniciando...");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.get('/mixer', async (req, res) => {
    // jobSeparaVozInstrumento(process.env.LOCAL_URL_CARELESS_WHISPER); // Trechos originais e só instrumentais seriam salvos em tabela trecho_base

    // Atribuição de trecho base para cada player utilizando user ids (sessão) e quantidade de players
    let player_count = 1;

    try {
      const result_trecho = await pool.query(`SELECT trecho_base_pai_id FROM trecho_base WHERE file_type = 1 LIMIT ${player_count}`
      ).then((res)=>{

        console.log("result_trecho", res.rows);
        const obj_trecho_base_ids = res.rows.map(row => row.trecho_base_pai_id);
        console.log("obj_trecho_base_ids", obj_trecho_base_ids);
        console.log("obj_users_session antes: ", obj_users_session);
        let i=0;
        obj_users_session.map(userid => {
          obj_users_session[userid].trecho_base_id = obj_trecho_base_ids[i++];
        })
        console.log("obj_users_session dps: ", obj_users_session);
        //link_song_user(obj_trecho_base_ids)
      })
        
        
    } catch (error) {
      console.error('Erro ao atribuir trechos:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }

    res.sendFile(path.join(__dirname, 'public', 'mixer.html'));
});

app.get('/song/user/:id', async (req, res) => {
    try {
      const result = await pool.query(`SELECT userid, trecho_base_pai_id FROM users WHERE userid = ${req.params.id}`);
      res.json(result.rows);
    } catch (error) {
      console.error('Erro ao obter dados do banco:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

app.post('join-audio-mix'), async (req, res) => {
 
}

app.post('/user'), async (req, res) => {
 
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

async function link_song_user(dados) {
  try {
      // Realize a inserção na tabela desejada usando os dados obtidos
      const resultInsercao = await pool.query('INSERT INTO sua_tabela (coluna1, coluna2, coluna3) VALUES ($1, $2, $3)', [dados.valor1, dados.valor2, dados.valor3]);

      return { success: true, message: 'Dados inseridos com sucesso!' };
  } catch (error) {
      console.error('Erro ao inserir dados:', error);
      return { success: false, error: 'Erro interno no servidor' };
  }
}