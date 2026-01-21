import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createQuiz } from "../services/api";
import "../styles/style.css"; // ✅ global styles

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { questionText: "", options: ["", "", "", ""], correctAnswer: "" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuiz({ title, questions })
      .then((res) => {
        console.log("✅ Quiz created:", res.data);
        navigate("/list");
      })
      .catch((err) => {
        console.error("❌ Error creating quiz:", err);
        alert("Error creating quiz: " + (err.response?.data?.error || err.message));
      });
  };

  return (
    <div className="container">
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit} className="card">
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          required
        />

        {questions.map((q, qi) => (
          <div key={qi} style={{ marginTop: "1rem" }}>
            <input
              type="text"
              placeholder="Question"
              value={q.questionText}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[qi].questionText = e.target.value;
                setQuestions(newQuestions);
              }}
              className="form-control"
              required
            />
            {q.options.map((opt, oi) => (
              <input
                key={oi}
                type="text"
                placeholder={`Option ${oi + 1}`}
                value={opt}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[qi].options[oi] = e.target.value;
                  setQuestions(newQuestions);
                }}
                className="form-control"
                required
              />
            ))}
            <input
              type="text"
              placeholder="Correct Answer"
              value={q.correctAnswer}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[qi].correctAnswer = e.target.value;
                setQuestions(newQuestions);
              }}
              className="form-control"
              required
            />
          </div>
        ))}

        <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Save Quiz
        </button>
      </form>
    </div>
  );
}