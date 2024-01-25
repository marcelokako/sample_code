import Moises from "moises/sdk"

const moises = new Moises({ apiKey: "b8b81646-c5e3-4d79-ab89-90701448c70d" })

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

await moises.deleteJob(jobId)
