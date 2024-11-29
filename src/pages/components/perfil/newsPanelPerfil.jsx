import React from "react";

const NewsPanelPerfil = ({ noticia }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-3">
      <a className="panel panel-default panel-md" href={noticia.enlace}>
        <div
          style={{ backgroundImage: `url(${noticia.imagen})` }}
          className="panel-heading img"
        ></div>
        <div className="panel-body">
          <time aria-hidden="true">{noticia.fecha}</time>
          <p className="h3_title">{noticia.titulo}</p>
        </div>
      </a>
    </div>
  );
};

export default NewsPanelPerfil;
