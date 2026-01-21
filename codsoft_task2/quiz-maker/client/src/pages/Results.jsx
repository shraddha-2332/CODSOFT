import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/style.css"; // ✅ global styles

export default function Results() {
  const location = useLocation();
  const { answers, questions } = location.state || { answers: {}, questions: [] };

  // Calculate score
  const score = questions.reduce((acc, q, idx) => {
    return acc + (answers[idx] === q.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="card">
        <h2>🎉 Quiz Results</h2>
        <p>
          You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
        </p>
      </div>

      <div style={{ marginTop: "2rem", maxWidth: "600px", margin: "auto" }}>
        {questions.map((q, idx) => (
          <div key={idx} className="card" style={{ marginBottom: "1.5rem" }}>
            <h4>{q.questionText}</h4>
            <p>
              ✅ Correct Answer: <strong>{q.correctAnswer}</strong>
            </p>
            <p>
              📝 Your Answer:{" "}
              <strong
                style={{
                  color: answers[idx] === q.correctAnswer ? "green" : "red",
                }}
              >
                {answers[idx] || "No answer"}
              </strong>
            </p>
          </div>
        ))}
      </div>

      <Link to="/list" className="btn btn-primary" style={{ marginTop: "2rem" }}>
        🔙 Back to Quiz List
      </Link>
    </div>
  );
}