import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuizById } from "../services/api";
import "../styles/style.css"; // ✅ global styles

export default function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getQuizById(id)
      .then((res) => {
        console.log("✅ Loaded quiz:", res.data);
        setQuiz(res.data);
      })
      .catch((err) => console.error("❌ Error loading quiz:", err));
  }, [id]);

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [current]: option };
    setAnswers(newAnswers);

    if (current + 1 < quiz.questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/results", { state: { answers: newAnswers, questions: quiz.questions } });
    }
  };

  if (!quiz) return <p>Loading...</p>;

  const q = quiz.questions[current];

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="card">
        <h2>{q.questionText}</h2>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt)}
            className="btn btn-primary"
            style={{ display: "block", margin: "0.5rem auto", width: "300px" }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}