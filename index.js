import Moises from "moises/sdk.js"

const moises = new Moises({ apiKey: "b8b81646-c5e3-4d79-ab89-90701448c70d" })

import express from 'express';
import path from 'path';

const apiUrl = 'https://api.music.ai/api/job';
const apiKey = 'b8b81646-c5e3-4d79-ab89-90701448c70d'
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
            const files = await moises.downloadJobResults(job, "./stems")
            console.log("Result:", files)
        } else {
            console.log("Job failed!")
        }
        
        //await moises.deleteJob(jobId)
    }
  

app.use(express.static('public'));

app.get('/', (req, res) => {
    jobMoises();
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.get('/mixer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mixer.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
