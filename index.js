import Moises from "moises/sdk.js"
import axios from 'axios';
import express from 'express';
import path from 'path';
import fs from 'fs';

const moises = new Moises({ apiKey: "b8b81646-c5e3-4d79-ab89-90701448c70d" })

const apiUrlJob = 'https://api.music.ai/api/job/d29324f6-bbc1-4011-a0a5-9884cbfb8b37';
const apiUrlUpload = 'https://api.music.ai/api/upload';

//const jobId = 'd29324f6-bbc1-4011-a0a5-9884cbfb8b37';
const apiKey = 'b8b81646-c5e3-4d79-ab89-90701448c70d';

const urlCarelessWhisper = 'public/samples/vlc-record-2024-01-24-17h34m27s-Careless Whisper-.mp3'

const app = express();
const port = 3000;


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
