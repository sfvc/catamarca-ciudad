import React from "react";

const JumbotronPerfil = ({ imagenDeFondo, nombre, descripcion }) => {
  return (
    <section
      className="jumbotron"
      style={{ backgroundImage: `url(${imagenDeFondo})` }}
    >
      <div className="jumbotron_body">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
              <h1>{nombre}</h1>
              <p>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default JumbotronPerfil;
