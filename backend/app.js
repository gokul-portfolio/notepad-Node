const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// ✅ CORS (VERY IMPORTANT)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Body parser MUST come BEFORE routes
app.use(express.json());

// ✅ Routes
app.use("/api/notes", noteRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
