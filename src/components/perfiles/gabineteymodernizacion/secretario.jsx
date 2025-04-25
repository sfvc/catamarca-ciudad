const Secretario = ({secretaria, nombre, cargo, breveDescripcion, avatarSecretario}) => {
    return (
        <section className="bg-info py-4 bg-light border-top border-4 border-primary">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12">
                        <h2 className="text-primary fw-bold mb-3">{secretaria}</h2>
                        <hr className="divider" />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-3 col-lg-2 mb-4 mb-md-0">
                        <div className="position-relative">
                            <img 
                                className="img-fluid rounded-circle shadow" 
                                alt={`Fotografía de ${nombre}`} 
                                src={avatarSecretario}
                            />
                            <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-2 shadow-sm">
                                <i className="bi bi-person-badge text-white"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-9 col-lg-10">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body">
                                <h3 className="card-title fw-bold">{nombre}</h3>
                                <h5 className="card-subtitle mb-3 text-muted">{cargo}</h5>
                                <div className="card-text">
                                    <p className="lead">{breveDescripcion}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Secretario;