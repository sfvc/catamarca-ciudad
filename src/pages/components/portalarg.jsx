export const PortalARG = () => {
    return ( 
        <div className="containe">
            <div className="region region-content">
                <div id="block-system-main" className="block block-system clearfix">
                    <div className="panel-pane pane-texto">
                        <div className="pane-content">
                            <div className="container-fluid bg-info text-white p-b-2">
                                <header className="home-new row">
                                    <h1 className="text-center m-t-4 h1 tit-buscador">Portal oficial del Estado argentino</h1>
                                    <div className="col-xs-12 col-md-8 m-t-2 col-md-offset-2 m-b-2">
                                        <form className="main-form" role="search" action="/tramitar/tramites_y_servicios" method="post" 
                                            id="apachesolr-search-custom-page-search-form-new-home" acceptCharset="UTF-8">
                                            <fieldset>
                                                <legend className="sr-only">Buscador de trámites</legend>
                                                <div>
                                                    <input type="hidden" name="form_build_id" value="form-q5fsqCJAtfTnD5TTjhQCEdI1GxortsZzd8ZYJYDJAx4" />
                                                    <input type="hidden" name="form_token" value="bzeC-x5plqFd0ZzLfI05jQ1hDxC8kQFYi9hkTDzSFtY" />
                                                    <input type="hidden" name="form_id" value="apachesolr_search_custom_page_search_form" />
                                                    <div style={{ display: 'none' }}>
                                                        <div className="form-item form-item-tarro-de-miel form-type-textfield form-group">
                                                            <label className="control-label" htmlFor="edit-tarro-de-miel">Dejar en blanco</label>
                                                            <input className="form-control form-text" type="text" id="edit-tarro-de-miel" name="tarro_de_miel" value="" size="60" maxLength="128" />
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <label className="sr-only" htmlFor="edit-keys-new-home">Buscar en el sitio</label>
                                                        <input placeholder="¿Necesitás hacer un trámite? Buscalo en TRAMITAR por tema o palabra clave" 
                                                            id="edit-keys-new-home" className="input-search form-control form-text" 
                                                            aria-label="Buscar trámites, servicios o áreas" type="text" name="keys" 
                                                            value="" size="20" maxLength="255" style={{ borderRight: '1px solid rgba(128, 128, 128, 0.23)' }} />
                                                        <span className="input-group-btn">
                                                            <button className="bg-white btn-search-reset btn btn-home btn-primary form-submit" 
                                                                    aria-labelledby="edit-keys-new-home" aria-label="Buscar" 
                                                                    type="submit" id="edit-submit-new-home" name="op">
                                                                <i className="fa fa-search text-primary"></i>
                                                                <span className="sr-only">Buscar en el sitio</span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="panel-separator"></div>

                    <div className="panel-pane pane-atajos">
                        <div className="pane-content">
                            <div className="bg-info">
                                <div className="container home-new w-100">
                                    <h2 className="h4 m-t-5 m-b-2">Te puede interesar</h2>
                                    <ul className="list-inline pull-left w-100 p-b-3">
                                        <li className="link1"><a href="/servicio/consultar-cuando-y-donde-cobro-en-anses">Consultá cuándo cobrás en ANSES</a></li>
                                        <li className="link1"><a href="/servicio/solicitar-constancia-de-cuil">Descargá tu constancia de CUIL</a></li>
                                        <li className="link1"><a href="/servicio/solicitar-la-tarifa-social-en-la-tarjeta-sube">Pedí la tarifa social en la SUBE</a></li>
                                        <li className="link1"><a href="/servicio/obtener-la-clave-de-la-seguridad-social">Obtené tu clave de seguridad social para usar miANSES</a></li>
                                        <li className="link1"><a href="/consultar-si-tenes-infracciones-de-transito">Consultá si tenés infracciones de tránsito</a></li>
                                        <li className="link1"><a href="/justicia/reincidencia/antecedentespenales">Gestioná tu Certificado de Antecedentes Penales</a></li>
                                        <li className="link1"><a href="/interior/dni">Sacá o renová el DNI</a></li>
                                        <li className="link1"><a href="/seguridadvial/licencianacional">Sacá la licencia de conducir</a></li>
                                        <li className="link1"><a href="/interior/pasaporte">Sacá o renová tu pasaporte</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
