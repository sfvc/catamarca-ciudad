import { useEffect } from 'react';

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
    // If modal is not open, return null
    if (!isOpen) return null;

    return (
        <div className="modal">

                {children}
        </div>
    );
};

export default Modal;
