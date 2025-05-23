import React from 'react';

const Error = () => {
  return (
    <div className="loading-screen">
      <img
        src="/images/logo-capital-sfvc.svg"
        width={300} // Asegurate de tener la imagen en public/
        alt="Cargando..."
        className="loading-image"
      />
      <p className="cargando-text">Error al cargar los datos, comprueba tu conexion de internet</p>
    </div>
  );
};

export default Error;
