import SearchBarPortal from "@components/home/searchBarPortal";

export const PortalARG = () => {
  return (
    <section className="jumbotron video-banner">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/Nodo.mp4" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      <div className="jumbotron_body">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
              <header className="home-new input__div">
                <h1 
                className="home_titulo"
                >
                  Portal oficial de la Municipalidad de Catamarca
                </h1>
                <br />

                <SearchBarPortal />
                <br />
              </header>
            </div>
          </div>
        </div>
      </div>
      
      <div className="overlay"></div>
    </section>
  );
};
