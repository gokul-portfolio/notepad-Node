import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import ConfirmPopup from "../common/ConfirmPopup";
import {
    BsFolder,
    BsFlag,
    BsCalendarEvent,
    BsPaperclip,
    BsBell,
    BsPencil,
    BsTrash,
} from "react-icons/bs";

const TaskCard = ({ task, onDelete, onEdit }) => {
    const status = task.status || "Pending";
    const priority = task.priority || "Medium";

    const handleDelete = () => {
        
        toast(
            ({ closeToast }) => (

                <ConfirmPopup
                    message="Are you sure you want to delete this task?"
                    confirmText="Delete"
                    onConfirm={() => {
                        onDelete?.(task._id);
                        closeToast();
                    }}
                    onCancel={closeToast}
                />
            ),
            {
                autoClose: false,
                closeOnClick: false,
                closeButton: false,
                position: "top-center",
            }
        );
    };

    return (
        <div
            className={`task-card priority-${priority.toLowerCase()} status-${status
                .replace(" ", "-")
                .toLowerCase()}`}
        >
            {/* Checkbox */}
            <div className="task-check">
                <input
                    type="checkbox"
                    checked={status === "Completed"}
                    readOnly
                />
            </div>

            {/* Body */}
            <div className="task-body">
                <div className="task-header">
                    <h4 className="task-title">{task.title}</h4>
                    <span className={`task-status ${status.replace(" ", "-").toLowerCase()}`}>
                        {status}
                    </span>
                </div>

                {task.description && (
                    <p className="task-desc">{task.description}</p>
                )}

                <div className="task-meta mt-3">
                    <span>
                        <BsFolder /> {task.category || "Others"}
                    </span>
                    <span>
                        <BsFlag /> {priority}
                    </span>
                    <span>
                        <BsCalendarEvent />{" "}
                        {task.deadline
                            ? new Date(task.deadline).toLocaleDateString()
                            : "No deadline"}
                    </span>
                </div>

                {task.tags?.length > 0 && (
                    <div className="task-tags mt-3">
                        {task.tags.map((tag, index) => (
                            <span className="tag" key={index}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="task-actions  gap-2">
                {task.attachment && (
                    <Button
                        variant="light"
                        size="sm"
                        title="Attachment"
                        onClick={() => window.open(task.attachment, "_blank")}
                    >
                        <BsPaperclip />
                    </Button>
                )}

                {task.notify && (
                    <Button variant="light" size="sm" title="Notification enabled">
                        <BsBell />
                    </Button>
                )}

                <Button
                    variant="light"
                    size="sm"
                    title="Edit"
                    onClick={() => onEdit?.(task)}
                >
                    <BsPencil />
                </Button>

                <Button
                    variant="light"
                    size="sm"
                    title="Delete"
                    onClick={handleDelete}
                >
                    <BsTrash />
                </Button>
            </div>
        </div>
    );
};

export default TaskCard;
