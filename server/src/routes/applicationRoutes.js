const express = require("express");
const multer = require("multer");
const Application = require("../models/Application");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Candidate applies
router.post("/", authMiddleware, upload.single("resume"), async (req, res) => {
  try {
    const application = new Application({
      jobId: req.body.jobId,
      candidateId: req.user.id,
      resumePath: req.file.path,
    });
    await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: "Error saving application" });
  }
});

// Candidate views own applications
router.get("/", authMiddleware, async (req, res) => {
  const apps = await Application.find({ candidateId: req.user.id });
  res.json(apps);
});

// Employer views all applications (no filter)
router.get("/employer", authMiddleware, async (req, res) => {
  try {
    const apps = await Application.find()
      .populate("jobId")
      .populate("candidateId");

    res.json(apps); // ✅ return everything, skip employerId filter
  } catch (err) {
    res.status(500).json({ message: "Error fetching applications" });
  }
});

module.exports = router;