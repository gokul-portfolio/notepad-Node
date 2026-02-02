const Task = require("../models/TaskModal");


const createTask = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      priority,
      status,
      startDate,
      deadline,
      tags,
      notify,
      assignedTo, 
    } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    let finalAssignedTo;

    if (req.user.role === "user") {
      finalAssignedTo = req.user._id;
    }

    if (req.user.role === "admin") {
      if (!assignedTo) {
        return res.status(400).json({
          message: "Assigned user is required for admin",
        });
      }
      finalAssignedTo = assignedTo;
    }

    const task = await Task.create({
      title,
      category,
      description,
      priority,
      status,
      startDate,
      deadline,
      assignedTo: finalAssignedTo,
      createdBy: req.user._id,
      tags: tags ? tags.split(",").map((t) => t.trim()) : [],
      attachment: req.file ? req.file.path : null,
      notify: notify ?? false,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("CREATE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};



const getTasks = async (req, res) => {
  try {
    let filter = {};

    if (req.user.role === "user") {
      filter.assignedTo = req.user._id;
    }

    const tasks = await Task.find(filter)
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    console.error("GET TASKS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};



const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate("assignedTo", "name email")
      .populate("createdBy", "name email");

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (
      req.user.role === "user" &&
      task.assignedTo._id.toString() !== req.user._id.toString()
    ) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(task);
  } catch (error) {
    console.error("GET TASK BY ID ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (
      req.user.role === "user" &&
      task.assignedTo.toString() !== req.user._id.toString()
    ) {
      return res.status(401).json({ message: "Not authorized" });
    }

    task.title = req.body.title ?? task.title;
    task.category = req.body.category ?? task.category;
    task.description = req.body.description ?? task.description;
    task.priority = req.body.priority ?? task.priority;
    task.status = req.body.status ?? task.status;
    task.startDate = req.body.startDate ?? task.startDate;
    task.deadline = req.body.deadline ?? task.deadline;

    if (req.user.role === "admin" && req.body.assignedTo) {
      task.assignedTo = req.body.assignedTo;
    }

    task.tags = req.body.tags
      ? req.body.tags.split(",").map((t) => t.trim())
      : task.tags;

    if (req.file) {
      task.attachment = req.file.path;
    }

    task.notify =
      req.body.notify !== undefined ? req.body.notify : task.notify;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    console.error("UPDATE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (
      req.user.role !== "admin" &&
      task.createdBy.toString() !== req.user._id.toString()
    ) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await task.deleteOne();
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("DELETE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
