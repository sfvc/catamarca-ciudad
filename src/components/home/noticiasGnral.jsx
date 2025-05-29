import { useEffect, useState } from "react";
import { catamarcaApi } from "@api/catamarcaApi";

const NoticiasGnral = () => {
  const [noticias, setNoticias] = useState([]);
  const [, setImagenes] = useState({});

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await catamarcaApi.get("/items/noticias");
        const noticiasOrdenadas = response.data.data.sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        const noticiasLimitadas = noticiasOrdenadas.slice(0, 3);
        setNoticias(noticiasLimitadas);

        const apiUrl = catamarcaApi.defaults.baseURL || "";

        const nuevasImagenes = response.data.data
          .filter((item) => item.imagen)
          .reduce((acc, item) => {
            acc[item.imagen] = `${apiUrl}/assets/${item.imagen}`;
            return acc;
          }, {});

        setImagenes(nuevasImagenes);
      } catch (error) {
        console.error("Error obteniendo noticias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="container">
      <div className="noticias-gnral">
        <div className="panel-pane pane-titulo col-md-12 m-l-m15">
          <div className="pane-content">
            <h2 className="activities-sidbar" style={{ textAlign: "center" }}>
              Noticias Destacadas
            </h2>
          </div>
        </div>

        <div className="parent" style={{ position: "relative" }}>
          {noticias.length > 0 ? (
            noticias.map((noticia, index) => {
              return (
                <a
                  key={noticia.id}
                  target="_blank"
                  href={`https://noticias.apps.cc.gob.ar/noticia/${noticia.id}`}
                  className={`div${index + 1} grid-item`}
                >
                  <div className="overlay">
                    <img
                      src={`${catamarcaApi.defaults.baseURL}/assets/${noticia.imagen}`}
                      alt={noticia.titulo}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -1,
                      }}
                    />
                    <div className="home-page__news-title-div">
                      <h3 className="home-page__news-title">{noticia.titulo}</h3>
                    </div>
                  </div>
                </a>
              );
            })
          ) : (
            <p>No hay noticias disponibles.</p>
          )}
        </div>

        <div className="container-fluid m-r-0 p-r-0">
          <a href="https://noticias.apps.cc.gob.ar" target="_blank" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </div>
  );
};

export default NoticiasGnral;
