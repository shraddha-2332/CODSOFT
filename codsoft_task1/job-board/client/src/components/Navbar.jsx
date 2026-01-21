import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // "candidate" or "employer"

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/"); // redirect to Home
  };

  return (
    <nav className="navbar">
      <h2>Job Board</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* Show login/register only if not logged in */}
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {/* Show employer dashboard only if logged in as employer */}
        {token && role === "employer" && (
          <Link to="/employer">Employer Dashboard</Link>
        )}

        {/* Show candidate dashboard only if logged in as candidate */}
        {token && role === "candidate" && (
          <Link to="/candidate">Candidate Dashboard</Link>
        )}

        {/* Show logout if logged in */}
        {token && (
          <button
            style={{
              marginLeft: "20px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}