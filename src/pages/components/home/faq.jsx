import { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const FaqCard = () => {
  const [noticias, setNoticias] = useState([]);
  const [imagenes, setImagenes] = useState({});

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await catamarcaApi.get("/items/noticias");
        const noticiasDestacadas = response.data.data.filter(noticia => noticia.destacado);
        const noticiasOrdenadas = noticiasDestacadas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        const noticiasLimitadas = noticiasOrdenadas.slice(0, 3);
        setNoticias(noticiasLimitadas);

        const apiUrl = catamarcaApi.defaults.baseURL || '';
        
        const nuevasImagenes = response.data.data
          .filter(item => item.imagen)
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
    <>
      <section>
        <div className="container">
          <div>
            <div className="panel-pane pane-titulo col-md-12 m-l-m15">
              <div className="pane-content">
                <h2 className="activities-sidbar" style={{ textAlign: "center" }}>
                  Noticias Destacadas
                </h2>
              </div>
            </div>
            <div className="panel-separator"></div>
            <div className="panel-pane pane-texto">
              <div className="pane-content">
                <p style={{ textAlign: "center" }}>
                  Ponete al día con las noticias destacadas de nuestra Municipalidad
                </p>
              </div>
            </div>
            <div className="panel-separator"></div>
            <div className="panel-pane pane-atajos">
              <div className="pane-content">
                <div className="row panels-row m-t-2">
                  {noticias.map(noticia => (
                    <div key={noticia.id} className="col-xs-12 col-sm-6 col-md-4">
                      <a href={`/noticia/${noticia.id}`} className="panel panel-default">
                        {noticia.imagen && imagenes[noticia.imagen] ? (
                          <img
                              src={imagenes[noticia.imagen]}
                              alt={noticia.titulo}
                              style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />
                        ) : (
                          <div>No hay imagen disponible</div>
                        )}
                        <div className="panel-body home-new m-b-1">
                          <p className="h3">{noticia.titulo}</p>
                          <p>{noticia.descripcion}</p>
                          {noticia.etiquetas && (
                            <div className="etiquetas">
                              {noticia.etiquetas.map((etiqueta, index) => (
                                <span key={index} className="badge badge-info" style={{ marginRight: "5px" }}>
                                  {etiqueta}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="panel-separator"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqCard;
