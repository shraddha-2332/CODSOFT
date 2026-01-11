import { useState } from "react";
import API from "../services/api";
import "../App.css";

export default function CandidateDashboard() {
  const [jobId, setJobId] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      alert("Error submitting application: " + err.response.data.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Candidate Dashboard</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job ID"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setResume(e.target.files[0])}
        />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}