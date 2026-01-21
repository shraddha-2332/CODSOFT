import { useEffect, useState } from "react";
import API from "../services/api";
import "../App.css";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    API.get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleApply = async (jobId) => {
    try {
      const formData = new FormData();
      formData.append("jobId", jobId);
      formData.append("resume", resume);

      const res = await API.post("/applications", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Application submitted successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Error applying: " + (err.response?.data?.message || "Unexpected error"));
    }
  };

  return (
    <div>
      <h1>Available Jobs</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Category:</strong> {job.category}</p>
            <p>{job.description}</p>

            {/* Resume upload field */}
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
            />

            <button onClick={() => handleApply(job._id)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}