import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";
import Results from "./pages/Results";

export default function App() {
  return (
    <Router>
      {/* Global navigation bar */}
      <Navbar />

      {/* Main content area */}
      <div style={{ padding: "2rem" }}>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Create quiz page */}
          <Route path="/create" element={<CreateQuiz />} />

          {/* Quiz list page */}
          <Route path="/list" element={<QuizList />} />

          {/* Take quiz page (dynamic quiz id) */}
          <Route path="/quiz/:id" element={<TakeQuiz />} />

          {/* Results page */}
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}