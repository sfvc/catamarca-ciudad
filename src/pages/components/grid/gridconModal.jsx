import React, { useState } from 'react';
import Modal from '../common/modal';

const GridConModal = ({ gridConModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    // Access the data for the current "Tramite"
    const gridData = gridConModal.paginaTramite[0].pagina; // This gets the first "pagina"

    const handleOpen = (option) => {
        // Find the corresponding modal option using the `link`
        const modalOption = gridConModal.paginaTramite[0].paginaModal.opciones.find(modal => modal.link === option.link);
        setSelectedOption(modalOption); // Set the selected option for the modal
        setIsModalOpen(true); // Open the modal
    };
    
    const handleClose = () => {
        setIsModalOpen(false);
        setSelectedOption(null);
    };

    return (
        <>
            <div className='Tramites__container'>
                <h1 style={{ textAlign: "center" }}>
                    {gridConModal.title} {/* Title from the passed gridConModal data */}
                </h1>
                <div className="TramistedGrid__grid-container container">
                    {/* Loop through the 'opciones' for the grid items */}
                    {gridData.opciones.map((card, index) => (
                        <div key={index} onClick={() => handleOpen(card)} style={{ cursor: 'pointer' }}>
                            <div className="TramistedGrid__card">
                                <img src={card.img} alt={card.title} />
                                <h3 className="TramistedGrid__card-title">{card.title}</h3>
                                <p className="TramistedGrid__card-content">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="TramistedGrid__btnContainer">
                    <a className="TramistedGrid__btnVolver" href="/">
                        <img src="./src/pages/images/arrowback.svg" alt="Back" />
                        Volver
                    </a>
                </div>
            </div>

            {/* Render the modal if an option is selected */}
            {selectedOption && (
                <Modal isOpen={isModalOpen} onClose={handleClose} option={selectedOption} />
            )}
        </>
    );
};

export default GridConModal;
