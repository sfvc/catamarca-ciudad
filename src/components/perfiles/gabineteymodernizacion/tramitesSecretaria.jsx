export function TramitesSecretarias({ tramitesDestacados }) {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-3xl font-bold mb-4 flex items-center">
                            <i className="text-secondary fa fa-map-marker text-blue-600 mr-2 pull-left"></i>
                            Aréas de la Secretaría
                        </h2>
                    </div>
                </div>

                <div className="row panels-row">
                    {tramitesDestacados.map((tramite, idx) => (
                        <div key={idx} className="col-xs-12 col-sm-6 col-md-3">
                            <a className="panel panel-default panel-icon" href="#">
                                <div>
                                    <div className="panel-heading">
                                        <i className={`fa ${tramite.icono}`}></i>
                                    </div>
                                    <div className="panel-body">
                                        <p className="h4">{tramite.director}</p>
                                        <p className="text-muted">{tramite.telefono}</p>
                                        <p className="text-muted">{tramite.correoElectronico}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
