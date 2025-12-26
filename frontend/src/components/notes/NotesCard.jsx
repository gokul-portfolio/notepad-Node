import React from "react";
import { FiCalendar, FiEdit2 } from "react-icons/fi";
const NotesCard = ({ note, onEdit }) => {
    const {
        title,
        category,
        priority = "low",
        note: content,
        deadline,
    } = note;

    return (

        <div className={`note-card note-card--${priority}`}>
            <div className="note-card__header">
                <h3 className="note-card__title">{title}</h3>
                <span className="note-card__category">{category}</span>
            </div>
            <p className="note-card__text">{content}</p>

            <div className="note-card__footer">

                <span className="note-card__deadline">
                    <FiCalendar size={14} />
                    {deadline}
                </span>

                <span className={`note-card__priority note-card__priority--${priority}`}>
                    {priority}
                </span>
                <button
                    className="note-card__edit-btn"
                    onClick={() => onEdit?.(note)}
                    aria-label="Edit note"
                >
                    <FiEdit2 size={16} />
                </button>
            </div>
        </div>

        
    );
};

export default NotesCard;
