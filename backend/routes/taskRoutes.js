const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload"); 

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// /api/tasks
router.route("/")
  .post(
    protect,
    upload.single("attachment"), // 🔥 THIS IS THE FIX
    createTask
  )
  .get(protect, getTasks);

// /api/tasks/:id
router.route("/:id")
  .get(protect, getTaskById)
  .put(
    protect,
    upload.single("attachment"), // optional for update
    updateTask
  )
  .delete(protect, deleteTask);

module.exports = router;
