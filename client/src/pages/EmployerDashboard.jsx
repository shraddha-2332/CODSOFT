import { useState } from "react";
import API from "../services/api";
import "../App.css";

export default function EmployerDashboard() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/jobs", {
        title,
        company,
        location,
        category,
        description,
      });
      alert("Job posted successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Error posting job: " + err.response.data.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Employer Dashboard</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}