const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

// 👉 controllers import
const userController = require("../controllers/userController");

const {
  getAllDesignations,
  getUsersByDesignation,
  getTeamMembers,
} = userController;

if (
  !getAllDesignations ||
  !getUsersByDesignation ||
  !getTeamMembers
) {
  throw new Error("❌ One or more controller functions are undefined");
}

// ✅ specific routes FIRST
router.get("/designations", getAllDesignations);
router.get("/team", getTeamMembers);


router.get("/", getUsersByDesignation);

module.exports = router;
