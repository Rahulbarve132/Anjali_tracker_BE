require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const testResultsRoutes = require("./routes/testResults");
const weeklyUpdatesRoutes = require("./routes/weeklyUpdates");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/test-results", testResultsRoutes);
app.use("/api/weekly-updates", weeklyUpdatesRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
