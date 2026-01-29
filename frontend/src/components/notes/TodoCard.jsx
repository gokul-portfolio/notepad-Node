import React from "react";

const PRIORITY_CONFIG = {
  high: { color: "#ff6b6b", label: "High" },
  medium: { color: "#ffd43b", label: "Medium" },
  low: { color: "#51cf66", label: "Low" },
};

const TodoCard = ({ todo }) => {
  const {
    title,
    category,
    priority = "low",
    description,
    deadline,
    status = "not-start",
  } = todo;

  const priorityStyle = {
    borderLeftColor: PRIORITY_CONFIG[priority].color,
  };

  return (
    <div className="todo-card" style={priorityStyle}>
      <div className="todo-card__header">
        <h3 className="todo-card__title">{title}</h3>
        <span className="todo-card__category">{category}</span>
      </div>

      <p className="todo-card__note">{description}</p>
      <div className="todo-card__footer">
        <span className="todo-card__deadline">
          📅 {deadline}
        </span>

        <span
          className="todo-card__priority"
          style={{ backgroundColor: PRIORITY_CONFIG[priority].color }}
        >
          {PRIORITY_CONFIG[priority].label}
        </span>

        <select className="todo-card__status" defaultValue={status}>
          <option value="not-start">Not started</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TodoCard;
