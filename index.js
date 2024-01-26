import Moises from "moises/sdk.js"
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config(); 

const apiKey = process.env.API_KEY;
const moises = new Moises({ apiKey })

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

const users = {};

// Usuário de homologação
const userIdTeste = 1;

// Populando objeto com usuários da sessão
users[userIdTeste] = {"urlsong" : process.env.LOCAL_URL_CARELESS_WHISPER};

// const apiUrlJob = `https://api.music.ai/api/job/${process.env.JOB_ID_SEP_VOCAL}`;

const port = process.env.PORT;

// const urlCarelessWhisper = process.env.LOCAL_URL_CARELESS_WHISPER;

const app = express();

// Function que separa a voz e instrumento. Primeiro add um Job para o Workflow "wf-separacao-vocal-instrumento", 
// depois baixa o resultado para uma pasta local

async function jobSeparaVozInstrumento (url) {
    const downloadUrl = await moises.uploadFile(url)

    const jobId = await moises.addJob(
        `job-${users[1]}`,
        "wf-separacao-vocal-instrumento",
        { inputUrl: downloadUrl }
        )
        
        const job = await moises.waitForJobCompletion(jobId)
        
        if (job.status === "SUCCEEDED") {
            console.log("Carregando...")
            const files = await moises.downloadJobResults(job, `.public/stems/${users[1]}`)
            console.log("Resultado:", files)
        } else {
            console.log("Job falhou!")
        }

        await moises.deleteJob(jobId)
        
    }

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.get('/mixer', (req, res) => {
    // jobSeparaVozInstrumento(urlCarelessWhisper);
    res.sendFile(path.join(__dirname, 'public', 'mixer.html'));
});

app.get('/api/get-user-url_song', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      console.error('Erro ao obter dados do banco:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
