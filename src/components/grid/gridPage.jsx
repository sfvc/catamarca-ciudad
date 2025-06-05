import { useEffect, useState } from "react";
import { catamarcaApi } from "@api/catamarcaApi";
import Cargando from "@components/common/Cargando";
import NoEncontrado from "@components/common/NoEncontrado";

const GridPage = ({
  endpoint,
  titulo,
  href,
  tramite,
  mostrarFiltro = false,
}) => {
  // Recibe el endpoint como prop
  const [categorias, setCategorias] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const [filtro, setFiltro] = useState("");
  const [loading, setLoading] = useState(true);

  const cargarCategoriasTramite = async () => {
    try {
      setLoading(true); // <-- comenzar carga
      const { data } = await catamarcaApi.get(endpoint);
      setCategorias(data.data);
      returnIcon(data.data);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    } finally {
      setLoading(false); // <-- finalizar carga
    }
  };
  useEffect(() => {
    if (endpoint) {
      cargarCategoriasTramite(); // Carga los datos solo si se pasa un endpoint
    }
  }, [endpoint]);

  const returnIcon = (data) => {
    const apiUrl = catamarcaApi.defaults.baseURL || "";

    const nuevasImagenes = data
      .filter((item) => item.icono)
      .reduce((acc, item) => {
        acc[item.icono] = `${apiUrl}/assets/${item.icono}`;
        return acc;
      }, {});

    setImagenes(nuevasImagenes);
  };

  return (
    <>
      {mostrarFiltro && (
        <div className="Tramites__filtro">
          <section className="bg-gray section-sm">
            <div className="">
              <div className="panel-pane pane-atajos">
                <div className="pane-content">
                  <ul className="nav nav-icons nav-icons-selected">
                    <li
                      className={!filtro ? "active" : ""}
                      onClick={() => setFiltro("")}
                    >
                      <a style={{ cursor: "pointer" }}>
                        <i className="icono-arg-tramite"></i>
                        <span>Todos</span>
                      </a>
                    </li>
                    <li
                      className={filtro === "Fiscal" ? "active" : ""}
                      onClick={() => setFiltro("Fiscal")}
                    >
                      <a style={{ cursor: "pointer" }}>
                        <i className="icono-arg-anticorrupcion bg-success"></i>
                        <span>Profesional</span>
                      </a>
                    </li>
                    <li
                      className={filtro === "ambiente" ? "active" : ""}
                      onClick={() => setFiltro("ambiente")}
                    >
                      <a style={{ cursor: "pointer" }}>
                        <i className="icono-arg-dni bg-primary"></i>
                        <span>Publico General</span>
                      </a>
                    </li>
                    <li
                      className={filtro === "Tr" ? "active" : ""}
                      onClick={() => setFiltro("Tr")}
                    >
                      <a style={{ cursor: "pointer" }}>
                        <i className="icono-arg-tramite bg-fucsia"></i>
                        <span>Tramites Online</span>
                      </a>
                    </li>
                    <li
                      className={filtro === "Normativa" ? "active" : ""}
                      onClick={() => setFiltro("Normativa")}
                    >
                      <a style={{ cursor: "pointer" }}>
                        <i className="fa fa-legal bg-warning"></i>
                        <span>Normativa</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      <div className="Tramites__container">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "750px", minWidth: "auto" }}
        >
          <h1>{titulo}</h1>
        </div>
        <div className="TramistedGrid__grid-container container">
          {(() => {
            if (loading) {
              return (
                <div class="container">
                  <div className="text-center">
                    <Cargando />
                  </div>
                </div>
              );
            }

            const filtrados = categorias.filter((card) =>
              filtro
                ? card.nombre.toLowerCase().includes(filtro.toLowerCase())
                : true
            );

            if (filtrados.length === 0) {
              return (
                <div class="container">
                  <div className="text-center">
                    <NoEncontrado />
                  </div>
                </div>
              );
            }

            return filtrados.map((card, index) => (
              <a
                key={index}
                href={`${href}?categoria=${card.id}`}
                style={{ all: "unset" }}
                target={card.external ? "_blank" : "_self"}
              >
                <div className={`TramistedGrid__card ${tramite}`}>
                  <img
                    className={`TramistedGrid__cardimg ${
                      card.padding0 ? "padding-0" : ""
                    }`}
                    src={imagenes[card.icono]}
                    alt={card.title}
                  />
                  <h3 className="TramistedGrid__card-title">{card.nombre}</h3>
                  <small className="TramistedGrid__card-small">
                    {card.descripcion}
                  </small>
                </div>
              </a>
            ));
          })()}
        </div>
      </div>
    </>
  );
};

export default GridPage;
