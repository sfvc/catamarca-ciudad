// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if not open

    const tableData = Array.from({ length: 4 }, (_, index) => ({
        title: `Titulo ${index + 1}`,
        content: `Contenido para row de titulo ${index + 1}.`
    }));

    return (
        <>
            <div className="modal__background" onClick={onClose}></div>
            <div className="modal">
                <h2 className="modal__title">Ficha de trámite</h2>
                <table className="modal__table">
                    <thead>
                        <tr>
                            <th className="modal__header">Título</th>
                            <th className="modal__header">Contenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="modal__row">
                                <td className="modal__cell">{row.title}</td>
                                <td className="modal__cell">{row.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="modal__button-container">
                    <table className="modal__descargar-table">
                        <thead>
                            <h3>Descargar</h3>
                        </thead>
                        <tr className="modal__descargar-tablerow">
                            <td className="modal__descargar-tabletd">
                                <figure class="modal__descargar-figure">
                                    <img src="../src/pages/images/pdf.svg" alt="" />
                                    <figcaption>Ficha del Tramite</figcaption>
                                    <button>Descargar</button>
                                </figure>
                            </td>
                            <td className="modal__descargar-tabletd">
                                <figure class="modal__descargar-figure">
                                    <img src="../src/pages/images/pdf.svg" alt="" />
                                    <figcaption>Ficha del Tramite</figcaption>
                                    <button>Descargar</button>
                                </figure>
                            </td>
                            <td className="modal__descargar-tabletd">
                                <figure class="modal__descargar-figure">
                                    <img src="../src/pages/images/pdf.svg" alt="" />
                                    <figcaption>Ficha del Tramite</figcaption>
                                    <button>Descargar</button>
                                </figure>
                            </td>
                        </tr>
                    </table>
                    <button className="modal__close-button" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </>
    );
};

export default Modal;
