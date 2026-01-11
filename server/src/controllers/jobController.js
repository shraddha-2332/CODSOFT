const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {
    const { title, company, location, category, description } = req.body;

    const job = new Job({
      title,
      company,
      location,
      category,
      description,
      employerId: req.user.id // ✅ ensure employerId is set
    });

    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: "Error creating job" });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

module.exports = { createJob, getJobs };