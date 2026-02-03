const ConfirmPopup = ({
    message = "Are you sure?",
    confirmText = "Yes",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
}) => {
    return (
        <div className="confirm-popup">
            <p className="confirm-message">{message}</p>

            <div className="confirm-actions">
                <button className="confirm-btn" onClick={onConfirm}>
                    {confirmText}
                </button>

                <button className="cancel-btn" onClick={onCancel}>
                    {cancelText}
                </button>
            </div>
        </div>
    );
};

export default ConfirmPopup;
