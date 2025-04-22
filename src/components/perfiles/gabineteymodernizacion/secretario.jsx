const Secretario = ({urlPerfil, secretaria, nombre, cargo, breveDescripcion, avatarSecretario}) => {
    return (
        <>
            <section className="bg-gray modulo-mapaestado " style={{borderTop: "10px solid white"}}>
                <a href={urlPerfil} style={{all: "unset", cursor: "pointer"}}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <h2 className="h3 section-title">{secretaria}</h2>
                        </div>
                        </div>

                        <div className="row margin-20">
                        <div className="col-xs-12 col-sm-3 col-md-2">
                            <img className="img-responsive img-rounded" alt="" src={avatarSecretario} />
                        </div>
                        <div className="col-xs-12 col-sm-9 col-md-10">
                            <h2>{nombre}<br/><small>{cargo}</small></h2>
                            <p>{breveDescripcion}</p>
                        </div>
                        </div>
                        <div className="page-break"></div>
                        <div className="page-break"></div>
                    </div>
                </a>
            </section>

        </>
    );
};

export default Secretario;
