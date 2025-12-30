const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

// protected route example
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Access granted", userId: req.userId });
});

module.exports = router;

