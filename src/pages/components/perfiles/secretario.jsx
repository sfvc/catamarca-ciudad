import React from "react";

const PerfilSecretario = ({ perfiles }) => {
  // Desestructuramos el objeto "perfiles" para obtener las propiedades directamente
  const { avatar, nombre, cargo, frase, periodo, redes_sociales, descripcion } = perfiles;

  return (
    <main role="main" className="PerfilIntendente container">
      <div className="PerfilIntendente__contenedor">
        <div className="PerfilIntendente__contenedor-imagen">
          <img className="img-responsive img-rounded" alt={nombre} src={avatar} width={250} />
          {/* <img src={avatar} alt={nombre} className="PerfilIntendente__imagen" /> */}
          <div className="PerfilIntendente__informacion">
            <h1 className="PerfilIntendente__nombre">{nombre}</h1>
            <h2 className="PerfilIntendente__cargo">{cargo}</h2>
            <q>{frase}</q>
            <br />
            <time className="PerfilIntendente__periodo" datetime="">{periodo}</time>
          </div>
        </div>
        <div className="PerfilIntendente__redes">
          <h3 className="PerfilIntendente__titulo-redes">Redes Sociales</h3>
          <div className="PerfilIntendente__contenedor-botones">
            {Object.keys(redes_sociales).map((red) => (
              <a key={red} href={redes_sociales[red]} className="PerfilIntendente__boton-redes">
                <img src={`/images/iconos-btn/${red}.svg`} alt={red} />
              </a>
            ))}
          </div>
        </div>
        <div className="PerfilIntendente__descripcion">
          <h3 className="PerfilIntendente__titulo-nacimiento">Nacimiento y Profesión</h3>
          <p className="PerfilIntendente__descripcion-nacimiento">{descripcion.nacimiento_y_profesion}</p>
          <h3 className="PerfilIntendente__titulo-nacimiento">Carrera Política</h3>
          {descripcion.carrera_politica.map((parrafo, index) => (
            <p key={index} className="PerfilIntendente__descripcion-nacimiento">{parrafo}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PerfilSecretario;
