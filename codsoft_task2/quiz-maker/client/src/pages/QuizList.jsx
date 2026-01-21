import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getQuizzes } from "../services/api";
import "../styles/style.css"; // ✅ import global styles

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    getQuizzes()
      .then((res) => {
        console.log("✅ Fetched quizzes:", res.data);
        setQuizzes(res.data); // ✅ res.data is the array of quizzes
      })
      .catch((err) => {
        console.error("❌ Error fetching quizzes:", err);
        alert("Error fetching quizzes: " + (err.response?.data?.error || err.message));
      });
  }, []);

  return (
    <div className="container">
      <h2>📚 Available Quizzes</h2>
      {quizzes && quizzes.length > 0 ? (
        <div>
          {quizzes.map((quiz) => (
            <div key={quiz._id} className="card">
              <h3>{quiz.title}</h3>
              <Link to={`/quiz/${quiz._id}`} className="btn btn-primary">
                Start Quiz
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No quizzes available</p>
      )}
    </div>
  );
}