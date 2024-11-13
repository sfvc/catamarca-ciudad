import GridPage from "../grid/gridPage";

const PerfilPage = () => {
    return ( 
        <main role="main">
            <section className="jumbotron" style={{ backgroundImage: "url('../src/pages/images/Saadi-Plaza.webp')" }}>
                <div className="jumbotron_body">
                    <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
                        <h1>Gustavo Saadi</h1>
                        <p>Mejora los sistemas y procesos internos del Estado, capacita permanentemente a sus empleados e incorpora Nuevas Tecnologías a la administración pública para alcanzar una gestión eficiente, inclusiva y transparente que brinde más y mejores servicios a los ciudadanos.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </section>

            <section>
                <article className="container container-width">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <h2>El Estado al servicio de la gente</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <blockquote>
                                <p>Todas las áreas del Gobierno tendrán un plan de comunicación e información que será publicado y actualizado en forma permanente</p>
                                <small>Juan Pérez</small>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                    </div>
                </article>
            </section>
            <section>
                <article className="container ">
                    <div className="row ">
                    <div className="col-md-12">
                        <h2 className="h3 section-title">Noticias Destacadas</h2>
                    </div>
                    </div>

                    <div className="row panels-row">
                    <div className="col-xs-12 col-sm-6">
                        <a className="panel panel-default panel-lg" href="#">
                        <div style={{ backgroundImage: "url('../src/pages/images/parquejumeal.webp')" }} className="panel-heading img"></div>
                        <div className="panel-body">
                            <time aria-hidden="true">Jueves 14 de Enero del 2016</time>
                            <p className="h3_title">Inauguracion de EcoParque</p>
                        </div>
                        </a>
                    </div>
                    
                    <div className="col-xs-12 col-sm-6">
                        <a className="panel panel-default panel-lg" href="#">
                        <div style={{ backgroundImage: "url('../src/pages/images/palacioMuni.jpg')" }} className="panel-heading img"></div>
                        <div className="panel-body">
                            <time aria-hidden="true">Jueves 14 de Enero del 2016</time>
                            <p className="h3_title">Municipalidad de Catamarca se renueva.
                        </p></div>
                        </a>
                    </div>
                    </div>
                    <div className="row panels-row">
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a className="panel panel-default panel-md" href="#">
                        <div style={{ backgroundImage: "url('../src/pages/images/gustavo.jpg')" }} className="panel-heading img"></div>
                        <div className="panel-body">
                            <time aria-hidden="true">Jueves 14 de Enero del 2016</time>
                            <p className="h3_title">Gustavo etc.
                        </p></div>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a className="panel panel-default panel-md" href="#">
                        <div style={{ backgroundImage: "url('../src/pages/images/Saadi-Plaza.webp')" }} className="panel-heading img"></div>
                        <div className="panel-body">
                            <time aria-hidden="true">Jueves 14 de Enero del 2016</time>
                            <p className="h3_title">Nueva Plaza.
                        </p></div>
                        </a>
                    </div>
                    <div className="page-break"></div>
                    <div className="page-break"></div>
                    <div className="page-break"></div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a className="panel panel-default panel-md" href="#">
                        <div style={{ backgroundImage: "url('../src/pages/images/cajaCredit.png')" }} className="panel-heading img"></div>
                        <div className="panel-body">
                            <time aria-hidden="true">Jueves 14 de Enero del 2016</time>
                            <p className="h3_title">Caja credito etc.
                        </p></div>
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <a className="panel panel-default panel-md" href="#">
                        <div style={{ backgroundImage: "url('../src/pages/images/mariano.jpeg')" }} className="panel-heading img"></div>
                        <div className="panel-body">
                            <time aria-hidden="true">Jueves 14 de Enero del 2016</time>
                            <p className="h3_title">Mariano etc.</p>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-12">
                        <a className="btn btn-primary">Ver todas las noticias</a>
                    </div>
                    </div>
                </article>
            </section>
    </main>
     );
}

export default PerfilPage;