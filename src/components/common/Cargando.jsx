import React from 'react';

const Cargando = () => {
  return (
    <div className="loading-screen">
      <img
        src="/images/logo-capital-sfvc.svg"
        width={300} // Asegurate de tener la imagen en public/
        alt="Cargando..."
        className="loading-image"
      />
      <p className="cargando-text">Cargando<span className="dots"></span></p>
    </div>
  );
};

export default Cargando;
