const mongoose = require("mongoose");

const weeklyUpdateSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: String, required: true },
  problems: { type: String, required: true },
});

module.exports = mongoose.model("WeeklyUpdate", weeklyUpdateSchema);
