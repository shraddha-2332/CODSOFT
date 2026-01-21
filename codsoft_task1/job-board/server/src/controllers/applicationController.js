const Application = require("../models/Application");

// Candidate applies for a job
const applyJob = async (req, res) => {
  try {
    const application = new Application({
      jobId: req.body.jobId,
      candidateId: req.user.id,
      resumePath: req.file.path,
    });
    await application.save();
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: "Error applying for job" });
  }
};

// Candidate views own applications
const getCandidateApplications = async (req, res) => {
  try {
    const apps = await Application.find({ candidateId: req.user.id });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: "Error fetching applications" });
  }
};

// Employer views applications for their jobs
const getEmployerApplications = async (req, res) => {
  try {
    const apps = await Application.find().populate("jobId").populate("candidateId");
    const employerApps = apps.filter(app => app.jobId.employerId.toString() === req.user.id);
    res.json(employerApps);
  } catch (err) {
    res.status(500).json({ message: "Error fetching employer applications" });
  }
};

module.exports = { applyJob, getCandidateApplications, getEmployerApplications };