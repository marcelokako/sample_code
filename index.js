import Moises from "moises/sdk.js"
import axios from 'axios';
import express from 'express';
import path from 'path';
import fs from 'fs';

const moises = new Moises({ apiKey: "b8b81646-c5e3-4d79-ab89-90701448c70d" })


const apiUrlJob = 'https://api.music.ai/api/job';
const apiUrlUpload = 'https://api.music.ai/api/upload';
const apiKey = 'b8b81646-c5e3-4d79-ab89-90701448c70d'
const urlCarelessWhisper = 'public/samples/vlc-record-2024-01-24-17h34m27s-Careless Whisper-.mp3'

const app = express();
const port = 3000;

axios({
    method: 'get',
    url: apiUrlUpload,
    headers: {
      'Authorization': apiKey,
    },
  })
    .then(response => {
      const uploadUrl = response.data.uploadUrl;
      const downloadUrl = response.data.downloadUrl;
  
      console.log('Upload URL:', uploadUrl);
      console.log('Download URL:', downloadUrl);
  
      return axios({
        method: 'put',
        url: uploadUrl,
        headers: {
          'Content-Type': 'audio/mpeg',
        },
        data: fs.readFileSync(urlCarelessWhisper),
      });
    })
    .then(uploadResponse => {
      console.log('File uploaded successfully :');
      // console.log(uploadResponse);
  
      // Step 3: Using the file
      const inputUrl = downloadUrl; // Use the downloadUrl obtained from step 1
  
      return axios({
        method: 'post',
        url: apiUrlJob,
        headers: {
          'Authorization': apiKey,
          'Content-Type': 'application/json',
        },
        data: {
          name: 'Workflow wf-separacao-vocal-instrumento - demo.ogg',
          workflow: 'wf-separacao-vocal-instrumento',
          params: {
            inputUrl: inputUrl,
          },
        },
      });
    })
    .then(jobResponse => {
      console.log('Job submitted successfully');
      console.log('Job response:', jobResponse.data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });

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
