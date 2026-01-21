const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  category: String,
  description: String,
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // ✅ must exist
});

module.exports = mongoose.model("Job", jobSchema);