import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("candidate");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { name, email, password, role });

      // If your backend returns token + user, you can auto-login:
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
        alert("Registration successful! You are now logged in.");
        navigate("/"); // redirect to Home
      } else {
        // If backend only confirms registration, redirect to login
        alert("Registration successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.message || "Unexpected error"));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="job-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="candidate">Candidate</option>
          <option value="employer">Employer</option>
        </select><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}