import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Modal from "./modal";

const ModalMobile = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const closeModal = () => {
    gsap.to(modalRef.current, {
      y: "100%",
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        if (onClose) onClose();
      },
    });
  };

  const handleOutsideClick = (e) => {
    // If modalRef exists and the click is outside the modal content, close it
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      gsap.set(modalRef.current, { y: "100%", opacity: 0 });
      gsap.to(modalRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });

      document.addEventListener("mousedown", handleOutsideClick);
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal-overlay" ref={overlayRef}>
        <div className="modalHeaderMobile" ref={modalRef}>
          <button className="modal__cerrarbarra" onClick={closeModal}>
            <img
              className="modal__cerrarbarra-icon"
              src="/path-to-close-icon.png"
              alt="close"
            />
          </button>
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default ModalMobile;
