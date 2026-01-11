import { useEffect, useState } from "react";
import API from "../services/api";
import "../App.css";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get("/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>My Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app._id}>
            <strong>Job ID:</strong> {app.jobId} <br />
            <strong>Resume:</strong> {app.resumePath}
          </li>
        ))}
      </ul>
    </div>
  );
}