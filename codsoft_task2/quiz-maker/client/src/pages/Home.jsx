import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1>🎯 Quiz Maker</h1>
      <p>Create quizzes or test your knowledge!</p>
      <div className="home-buttons">
        <Link to="/create" className="home-btn">Create Quiz</Link>
        <Link to="/list" className="home-btn">Browse Quizzes</Link>
      </div>
    </div>
  );
}