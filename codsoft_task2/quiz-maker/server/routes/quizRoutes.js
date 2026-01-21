const express = require("express");
const router = express.Router();
const { createQuiz, getQuizzes, getQuizById } = require("../controllers/quizController");

// Routes
router.post("/quizzes", createQuiz);
router.get("/quizzes", getQuizzes);
router.get("/quizzes/:id", getQuizById);

module.exports = router;