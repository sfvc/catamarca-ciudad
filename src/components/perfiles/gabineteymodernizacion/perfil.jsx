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

      <section className="bg-gray section-sm">
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
      </section>

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
        <Descripcion />
      </div>

      <div data-aos="fade-up">
        <TramitesSecretarias />
      </div>

      <div data-aos="fade-up">
        <NoticiasSecretaria />
      </div>
    </main>
  );
};

export default PerfilPage;
