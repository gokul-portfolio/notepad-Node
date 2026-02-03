const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            minlength: [3, "Title must be at least 3 characters"],
            maxlength: [100, "Title cannot exceed 100 characters"],
        },

        category: {
            type: String,
            trim: true,
            enum: ["Others", "Development", "Design", "Marketing"],
            default: "Developer",
        },

        description: {
            type: String,
            trim: true,
            maxlength: [500, "Description cannot exceed 500 characters"],
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium",
        },

        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],
            default: "Pending",
        },

        startDate: {
            type: Date,
        },

        deadline: {
            type: Date,
            required: [true, "Deadline is required"],
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        attachment: {
            type: String,
        },

        notify: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

taskSchema.index({
    title: "text",
    description: "text",
    tags: "text",
});

module.exports = mongoose.model("Task", taskSchema);
