import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const createQuiz = (quizData) => API.post("/quizzes", quizData);
export const getQuizzes = () => API.get("/quizzes");
export const getQuizById = (id) => API.get(`/quizzes/${id}`);