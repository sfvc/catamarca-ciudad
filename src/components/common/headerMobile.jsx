import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import HeaderMobileNav from '@components/common/headerMobileNav';
import Modal from '@components/common/modal';
import ModalMobile from './modalMobile';

const HeaderMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null); // Reference to modal element

    const openModal = () => {
        setIsModalOpen(true); // Set modal state to open
    };

    const closeModal = () => {
        // Animate the modal closing first
        gsap.to(modalRef.current, {
            y: '100%',  // Move the modal down to hide it
            opacity: 0, // Fade out
            duration: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
                setIsModalOpen(false); // Close modal after animation completes
            },
        });
    };

    const animateModal = () => {
        gsap.set(modalRef.current, { y: '100%' }); // Initial position off-screen
        gsap.to(modalRef.current, {
            y: '0%', // Slide the modal up into view
            opacity: 1, // Fade in
            duration: 0.3,
            ease: 'power2.inOut',
        });
    };

    const animateModalUp = () => {
        gsap.set(modalRef.current, { y: '0%' }); // Keep the modal in position
        gsap.to(modalRef.current, {
            y: '100%',  // Slide the modal down off-screen
            opacity: 0, // Fade out
            duration: 0.3,
            ease: 'power2.inOut',
        });
    };

    // Handle animation only on state change
    useEffect(() => {
        if (isModalOpen) {
            animateModal(); // Animate modal in when it's opened
            document.body.classList.add('modal-open')
        } else {
            animateModalUp(); // Animate modal out when it's closed
            document.body.classList.remove('modal-open'); 
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isModalOpen]);// Trigger this effect when isModalOpen changes

    return (
        <nav className="HeaderMobile border-bottom-amarillo" style={{ borderBottom: "3px solid #f2931a", backgroundColor: "#001529" }}>
            <div className="navbar-headerMobile">
                    <a
                        className="navbar-brand"
                        href="/"
                        id="navbar-brand"
                        aria-label="Catamarca Capital"
                    >
                        <img
                            src="/images/logo_CATACAPI.webp"
                            className='navbar-header'
                            alt="Catamarca Capital"
                            height="25"
                            width="auto"
                        />
                    </a>
                <img
                    src="/images/menu.svg"
                    alt="Menu Icon"
                    onClick={openModal} // Open the modal when the menu icon is clicked
                />
            </div>

            <Modal clase='modal' isOpen={isModalOpen}>
                <div className='modal' onClick={closeModal}></div>
                <div className="modalHeaderMobile" ref={modalRef}>
                    <button
                        className="modal__cerrarbarra"
                        onClick={closeModal} // Close the modal on click
                    >
                        <img className="modal__cerrarbarra-icon" />
                    </button>
                    <HeaderMobileNav />
                </div>
            </Modal>
        </nav>
    );
};

export default HeaderMobile;
