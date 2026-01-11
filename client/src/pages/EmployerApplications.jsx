import { useEffect, useState } from "react";
import API from "../services/api";
import "../App.css";

export default function EmployerApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get("/applications/employer")
      .then((res) => setApplications(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Applications for My Jobs</h2>
      <ul>
        {applications.map((app) => (
          <li key={app._id}>
            <strong>Candidate:</strong> {app.candidateId.name} <br />
            <strong>Email:</strong> {app.candidateId.email} <br />
            <strong>Resume:</strong> {app.resumePath}
          </li>
        ))}
      </ul>
    </div>
  );
}