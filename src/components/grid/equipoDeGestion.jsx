import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EquipoDeGestion = ({ titulo, equipo, href }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="Tramites__container">
      <section
        className="jumbotron"
        style={{ backgroundImage: "url('/images/palacio-municipal.jpg')" }}
      >
        <div className="jumbotron_body">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
                <h1 data-aos="fade-up">Equipo de Gestión</h1>
                <p data-aos="fade-up" data-aos-delay="200">
                  Este equipo trabaja de manera articulada para garantizar una
                  administración moderna...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </section>

      <section className="bg-gray section-sm">
        <div>
          <div className="panel-pane pane-atajos">
            <div className="pane-content">
              <ul
                className="nav nav-icons nav-icons-selected"
                data-aos="fade-up"
              >
                <li className="active">
                  <a href="/organigrama">
                    <i className="icono-arg-casa-rosada bg-success"></i>
                    <span>Organigrama</span>
                  </a>
                </li>
                <li>
                  <a href="/valores">
                    <i className="icono-arg-tramite bg-fucsia"></i>
                    <span>Valores</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=-28.47729712475078,-65.77732108814989"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="icono-arg-provincia-catamarca"></i>
                    <span>Localiza el Municipio en el Mapa</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div
        className="container"
        style={{ textAlign: "center", maxWidth: "750px" }}
      >
        <h1 data-aos="fade-up">{titulo}</h1>
      </div>

      <div className="TramistedGrid__grid-container container">
        {equipo.map((card, index) => (
          <a
            key={index}
            href={`${href}${card.link}`}
            style={{ all: "unset" }}
            target={card.external ? "_blank" : "_self"}
          >
            <div
              className="TramistedGrid__card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                className={`TramistedGrid__cardimg ${
                  card.padding0 ? "padding-0" : ""
                }`}
                src={card.img}
                alt={card.title}
              />
              <h3 className="TramistedGrid__card-title">{card.title}</h3>
              <small className="TramistedGrid__card-small">
                {card.descripcion}
              </small>
            </div>
          </a>
        ))}
      </div>
      <div className="container">
        <div className="botonflujo" >
          <a href="/" className="btn btn-primary">
            Volver a Pagina de Inicio
          </a>
          <a href="/organigrama" className="btn btn-success">
            Ver Organigrama
          </a>
        </div>
      </div>
    </div>
  );
};

export default EquipoDeGestion;
