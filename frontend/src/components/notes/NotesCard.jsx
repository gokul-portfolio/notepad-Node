import React from "react";
import { FiCalendar, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { toast } from "react-toastify";

const NotesCard = ({ note, onDelete }) => {
    const navigate = useNavigate();

    const {
        title,
        category,
        description,
        createdAt,
        tags
    } = note;

    const handleEdit = () => {
        navigate(`/notes/edit/${note._id}`);
    };

    const handleDelete = () => {
        toast(
            ({ closeToast }) => (
                <div style={{ textAlign: "center" }}>
                    <p>Are you sure you want to delete this note?</p>

                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                        <button
                            onClick={async () => {
                                try {
                                    await api.delete(`/notes/${note._id}`);
                                    toast.success("Note deleted");
                                    onDelete?.(note._id);
                                    closeToast();
                                } catch (err) {
                                    toast.error("Delete failed");
                                }
                            }}
                            style={{
                                background: "#dc3545",
                                color: "#fff",
                                border: "none",
                                padding: "6px 12px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Yes
                        </button>

                        <button
                            onClick={closeToast}
                            style={{
                                background: "#6c757d",
                                color: "#fff",
                                border: "none",
                                padding: "6px 12px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ),
            {
                position: "top-center",
                autoClose: false,
                closeOnClick: false,
                closeButton: false,
            }
        );
    };

    return (
        <div className={`note-card note-card--low`}>
            <div className="note-card__header">
                <h3 className="note-card__title">{title}</h3>
                <span className="note-card__category">{category}</span>
            </div>

            <p className="note-card__text">{description}</p>

            <div className="note-card__footer">
                <span className="note-card__deadline">
                    <FiCalendar size={14} /> —
                </span>

                <span className="note-card__created">
                    <FiCalendar size={14} />
                    {new Date(createdAt).toLocaleDateString()}
                </span>

                <div className="note-card__tags">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="note-card__priority note-card__priority--low"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <button
                    className="note-card__edit-btn"
                    onClick={handleEdit}
                    aria-label="Edit note"
                >
                    <FiEdit2 size={16} />
                </button>

                <button
                    className="note-card__edit-btn"
                    onClick={handleDelete}
                    aria-label="Delete note"
                >
                    <FiTrash2 size={16} />
                </button>
            </div>
        </div>
    );
};

export default NotesCard;
