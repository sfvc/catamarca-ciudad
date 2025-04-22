const SeccionPerfil = ({ titulo, contenido, cita }) => {
  return (
    <article className="container container-width">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          {titulo && <h2>{titulo}</h2>}
          {contenido && <p>{contenido}</p>}
          {cita && (
            <blockquote>
              <p>{cita.texto}</p>
              <small>{cita.autor}</small>
            </blockquote>
          )}
        </div>
      </div>
    </article>
  );
};

export default SeccionPerfil;
