import { useEffect } from "react";
import JumbotronPerfil from "@components/perfiles/gabineteymodernizacion/jumbotronPerfil";
import { Descripcion } from "@components/perfiles/gabineteymodernizacion/descripcion";
import { NoticiasSecretaria } from "@components/perfiles/gabineteymodernizacion/noticiasSecretarias";
import { TramitesSecretarias } from "@components/perfiles/gabineteymodernizacion/tramitesSecretaria";
import Secretario from "@components/perfiles/gabineteymodernizacion/secretario";
import AOS from "aos";
import "aos/dist/aos.css";

const PerfilPage = ({ perfiles }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main role="main">
      <JumbotronPerfil
        imagenDeFondo={perfiles?.imagenDeFondo}
        nombre={perfiles?.nombre}
        descripcion={perfiles?.descripcion}
      />

      {/* <section className="bg-gray section-sm">
        <div data-aos="fade-up">
          <div className="panel-pane pane-atajos">
            <div className="pane-content">
              <ul className="nav nav-icons nav-icons-selected">
                <li className="active">
                  <a href="/aaip/accesoalainformacion">
                    <i className="icono-arg-casa-rosada bg-success"></i>
                    <span>Intendente</span>
                  </a>
                </li>
                <li>
                  <a href="/aaip/tramites">
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
      </section> */}

      <div data-aos="fade-up">
        <Descripcion
          seccionDescripcion={perfiles.seccionDescripcion}
          queHacemos={perfiles.queHacemos}
          misionVision={perfiles.misionVision}
        />
      </div>

      <div data-aos="fade-up">
        <Secretario
          urlPerfil={perfiles.link}
          secretaria={perfiles.nombre}
          nombre={perfiles.nombreSecretario}
          cargo={perfiles.cargo}
          breveDescripcion={perfiles.breveDescripcion}
          avatarSecretario={perfiles.avatarSecretario}
        />
      </div>

      <div data-aos="fade-up">
        <TramitesSecretarias tramitesDestacados={perfiles.tramitesDestacados} />
      </div>


      {/* <div className="container">
        <section className="organigramaPerfil__proyectos">
          <h3>Proyectos Destacados</h3>
          
          <section className="organigramaPerfil__kpis">
            <ul>
            <li>Índice de rotación anual: 8%</li>
            <li>Tiempo promedio de contratación: 22 días</li>
            <li>Satisfacción interna: 89%</li>
            </ul>
        </section>
      </section>
        <section className="organigramaPerfil__kpis">
          <h3>Indicadores Clave</h3>
          <ul>
          <li>Índice de rotación anual: 8%</li>
          <li>Tiempo promedio de contratación: 22 días</li>
          <li>Satisfacción interna: 89%</li>
          </ul>
      </section>

      <section className="organigramaPerfil__herramientas">
          <h3>Herramientas que Utiliza</h3>
          <ul>
          <li>Workday</li>
          <li>Microsoft Teams</li>
          <li>Power BI</li>
          </ul>
      </section>
    </div> */}

      {/* <div data-aos="fade-up">
        <NoticiasSecretaria />
      </div> */}
      <div className="container">
        <div className="botonflujo">
          <a href="/" className="btn btn-primary">
            Volver a Pagina de Inicio
          </a>
          <a href="/EquipoDeGestion" className="btn btn-success">
            Ver Equipo de Gestión
          </a>
        </div>
      </div>
    </main>
  );
};

export default PerfilPage;
