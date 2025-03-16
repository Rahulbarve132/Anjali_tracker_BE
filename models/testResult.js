const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  subject: { type: String, enum: ["Physics", "Chemistry", "Mathematics"], required: true },
  date: { type: String, required: true },
  scoreObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  topics: { type: [String], required: true },
  remarks: { type: String, enum: ["Needs Improvement", "Good", "Excellent"], required: true },
});

module.exports = mongoose.model("TestResult", testResultSchema);
