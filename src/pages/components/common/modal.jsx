
// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
    // If modal is not open, return null
    if (!isOpen) return null;

    return (
        <div className="modal" onClick={onClose}>
            {/* Modal background to close on click */}
            {/* Modal Content */}
                {children}
        </div>
    );
};

export default Modal;