const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
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
            enum: ["Work", "Personal", "Urgent", "Others"], 
            default: "Others",
        },

        description: {
            type: String,
            required: [true, "Description is required"],
            minlength: [5, "Description must be at least 5 characters"],
        },

        tags: [
            {
                type: String,
                trim: true,
                lowercase: true,
            },
        ],

        attachment: {
            type: String, 
            default: "",
        },

        attachmentType: {
            type: String,
            enum: ["image", "pdf", "doc", "other"],
            default: "other",
        },

        isArchived: {
            type: Boolean,
            default: false,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


noteSchema.index({ title: "text", description: "text", tags: "text" });

module.exports = mongoose.model("Note", noteSchema);
