import Moises from "moises/sdk.js"
import axios from 'axios';
import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); 

const apiKey = process.env.API_KEY;
const moises = new Moises({ apiKey })

const apiUrlJob = `https://api.music.ai/api/job/${process.env.JOB_ID_SEP_VOCAL}`;
const apiUrlUpload = 'https://api.music.ai/api/upload';

const port = process.env.PORT;

const urlCarelessWhisper = process.env.LOCAL_URL_CARELESS_WHISPER;

const app = express();


async function jobMoises () {
    const downloadUrl = await moises.uploadFile(urlCarelessWhisper)

    const jobId = await moises.addJob(
        "job-separa",
        "wf-separacao-vocal-instrumento",
        { inputUrl: downloadUrl }
        )
        
        const job = await moises.waitForJobCompletion(jobId)
        
        if (job.status === "SUCCEEDED") {
            console.log("Carregando...")
            const files = await moises.downloadJobResults(job, "./stems")
            console.log("Resultado:", files)
        } else {
            console.log("Job falhou!")
        }
        
    }


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.get('/mixer', (req, res) => {
    jobMoises();
    res.sendFile(path.join(__dirname, 'public', 'mixer.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
