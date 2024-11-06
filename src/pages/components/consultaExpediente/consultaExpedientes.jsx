import React, { useState } from 'react';

const ConsultaExpedientes = () => {
    const [expediente, setExpediente] = useState('');
    const [clave, setClave] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., API call)
        console.log(`Expediente: ${expediente}, Clave: ${clave}`);
    };

    return (
        <div className="consulta-container container">
            <h1 className="consulta-container__title">Consulta de Expedientes</h1>
            <p className="consulta-container__description">
                Complete la informacion solicitada para el estado del expediente.
            </p>
            <br />
            <p className="consulta-container__description">
                El Nro de Expediente tiene el siguiente formato: Letra de Secretaria-Nro de Expediente-Letra-Año (HD-99999-A-12) / la clave de seguridad es alfanumerica que debe ser provista al iniciar el Expediente X10LG.
            </p>
            <form className="consulta-container__form" onSubmit={handleSubmit}>
                <div className="consulta-container__form-group">
                    <label htmlFor="expediente" className="consulta-container__label">Expediente N°</label>
                    <input
                        type="text"
                        id="expediente"
                        className="consulta-container__input"
                        value={expediente}
                        onChange={(e) => setExpediente(e.target.value)}
                        placeholder="Ej: HD – 99999 – D – 12"
                        required
                    />
                </div>
                <div className="consulta-container__form-group">
                    <label htmlFor="clave" className="consulta-container__label">Clave</label>
                    <input
                        type="text"
                        id="clave"
                        className="consulta-container__input"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        placeholder="Ej: X10LG"
                        required
                    />
                </div>
                <button type="submit" className="consulta-container__button">Consultar</button>
            </form>
            <p className="consulta-container__note">
                * Recuerde que debe solicitar la copia de los datos correspondientes con clave de seguridad de su expediente al iniciar el tramite.
            </p>
        </div>
    );
};

export default ConsultaExpedientes;
