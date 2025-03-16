const express = require("express");
const router = express.Router();
const WeeklyUpdate = require("../models/WeeklyUpdate");

// POST a new weekly update
router.post("/", async (req, res) => {
  try {
    const weeklyUpdate = new WeeklyUpdate(req.body);
    await weeklyUpdate.save();
    res.status(201).json({ message: "Weekly update added successfully", weeklyUpdate });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all weekly updates
router.get("/", async (req, res) => {
  try {
    const updates = await WeeklyUpdate.find();
    res.json(updates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
