import Moises from "moises/sdk"

const moises = new Moises({ apiKey: "your-api-key" })

const downloadUrl = await moises.uploadFile("./song.mp3")

const jobId = await moises.addJob(
  "job-testefodaci",
  "moises/stems-vocals-drums-bass-other",
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
