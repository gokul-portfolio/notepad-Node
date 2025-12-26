import React from "react";
import { Button } from "react-bootstrap";
import {
    BsFolder,
    BsFlag,
    BsCalendarEvent,
    BsClock,
    BsPaperclip,
    BsBell,
    BsPencil,
    BsTrash
} from "react-icons/bs";

const TaskCard = ({ task }) => {
    return (
        <div className={`task-card priority-${task.priority} status-${task.status}`}>
            {/* Checkbox */}
            <div className="task-check">
                <input type="checkbox" defaultChecked={task.status === "completed"} />
            </div>

            {/* Task Body */}
            <div className="task-body">
                <div className="task-header">
                    <h4 className="task-title">{task.title}</h4>
                    <span className={`task-status ${task.status}`}>
                        {task.status === "completed" ? "Done" : "Pending"}
                    </span>
                </div>

                <p className="task-desc">{task.description}</p>

                <div className="task-meta mt-3">
                    <span><BsFolder /> {task.category}</span>
                    <span><BsFlag /> {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
                    <span><BsCalendarEvent /> {task.date}</span>
                    <span><BsClock /> {task.time}</span>
                </div>

                <div className="task-tags mt-3">
                    {task.tags.map((tag, index) => (
                        <span className="tag" key={index}>{tag}</span>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="task-actions d-flex flex-column gap-2">
                <Button variant="light" size="sm" title="Attachment"><BsPaperclip /></Button>
                <Button variant="light" size="sm" title="Notify"><BsBell /></Button>
                <Button variant="light" size="sm" title="Edit"><BsPencil /></Button>
                <Button variant="light" size="sm" title="Delete"><BsTrash /></Button>
            </div>
        </div>
    );
};

export default TaskCard;
