import { FiCalendar, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import ConfirmPopup from "../common/ConfirmPopup";

const NotesCard = ({ note }) => {
    const navigate = useNavigate();
    const { deleteNote } = useContext(UserContext);

    const {
        title,
        category,
        description,
        createdAt,
        tags,
    } = note;

    const handleEdit = () => {
        navigate(`/notes/edit/${note._id}`);
    };

    const handleDelete = () => {
        toast(
            ({ closeToast }) => (
                <ConfirmPopup
                    message="Are you sure you want to delete this note? This action cannot be undone."
                    confirmText="Delete"
                    onConfirm={() => {
                        deleteNote(note._id);
                        closeToast();
                    }}
                    onCancel={closeToast}
                />
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
        <div className="note-card note-card--low">
            <div className="note-card__header">
                <h3 className="note-card__title">{title}</h3>
                <span className="note-card__category">{category}</span>
            </div>

            <p className="note-card__text">{description}</p>

            <div className="note-card__footer">
                <span className="note-card__created">
                    <FiCalendar size={14} />
                    {new Date(createdAt).toLocaleDateString()}
                </span>

                <div className="note-card__tags">
                    {tags?.[0] && (
                        <span className="note-card__priority note-card__priority--low">
                            #{tags[0]}
                        </span>
                    )}
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
