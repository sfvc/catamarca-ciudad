import React from 'react';

const NoEncontrado = () => {
  return (
    <div className="loading-screen">
      <img
        src="/images/logo-capital-sfvc.svg"
        width={300} // Asegurate de tener la imagen en public/
        alt="Lo buscado no fue encontrado"
        className="loading-image"
      />
      <p className="cargando-text">Lo buscado no fue encontrado<span className="dots"></span></p>
    </div>
  );
};

export default NoEncontrado;
