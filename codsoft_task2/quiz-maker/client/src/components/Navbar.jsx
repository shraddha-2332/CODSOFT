import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Quiz Maker</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Quiz</Link>
        <Link to="/list">Quiz List</Link>
      </div>
    </nav>
  );
}