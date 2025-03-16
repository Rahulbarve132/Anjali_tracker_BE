const express = require("express");
const router = express.Router();
const TestResult = require("../models/TestResult");

// POST a new test result
router.post("/", async (req, res) => {
  try {
    const testResult = new TestResult(req.body);
    await testResult.save();
    res.status(201).json({ message: "Test result saved successfully", testResult });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all test results
router.get("/", async (req, res) => {
  try {
    const results = await TestResult.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
