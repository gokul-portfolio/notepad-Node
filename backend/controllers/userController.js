const User = require("../models/User");

/**
 * GET /api/users/designations
 * Fetch all designations from schema enum
 */
const getAllDesignations = async (req, res) => {
  try {
    const designations =
      User.schema.path("designation")?.enumValues || [];

    res.status(200).json(designations);
  } catch (error) {
    console.error("getAllDesignations error:", error);
    res.status(500).json({ message: "Failed to fetch designations" });
  }
};

/**
 * GET /api/users?designation=developer
 * Fetch users by designation (used in task assign)
 */
const getUsersByDesignation = async (req, res) => {
  try {
    const { designation } = req.query;

    const filter = { isActive: true };

    if (designation) {
      filter.designation = designation;
    }

    const users = await User.find(filter).select(
      "_id name email phone designation"
    );

    res.status(200).json(users);
  } catch (error) {
    console.error("getUsersByDesignation error:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

/**
 * GET /api/users/team
 * Admin  -> all users
 * Others -> same designation users
 */
const getTeamMembers = async (req, res) => {
  try {
    const { role, designation } = req.user; // from protect middleware

    const filter = { isActive: true };

    if (role !== "admin") {
      filter.designation = designation;
    }

    const users = await User.find(filter)
      .select("name email phone designation")
      .sort({ name: 1 });

    res.status(200).json(users);
  } catch (error) {
    console.error("getTeamMembers error:", error);
    res.status(500).json({ message: "Failed to fetch team members" });
  }
};

module.exports = {
  getAllDesignations,
  getUsersByDesignation,
  getTeamMembers,
};
