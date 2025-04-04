import { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const CategoriasTramites = ({ id, url, info }) => {
  const [tramites, setTramites] = useState([]);
  const [imagenes, setImagenes] = useState({});

  const cargarTramites = async (idCategoria) => {
    const test = `${url}${idCategoria}`;
    console.log(test);
    try {
      const response = await catamarcaApi.get(
        `${url}${idCategoria}`
      );
      console.log(response);
      setTramites(response.data.data);
      returnIcon(response.data.data);

      console.log(response);
    } catch (error) {
      console.error("Error cargando tramites:", error);
    }
  };

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
  

  useEffect(() => {
    cargarTramites(id);
  }, [id]);



  console.log(tramites);
  return (
    <>
      {tramites.length === 0 ? (
        <p>Cargando Tramites</p>
      ) : (
        <div className="Tramites__container">
          <div
            className="container"
            style={{ textAlign: "center", maxWidth: "750px", minWidth: "auto" }}
          >
            <h1>Categorias</h1>
                {/* {categorias (
                <>
                    <div style={{marginBottom:"0.5rem"}}>
                    <q style={{color:"#666"}}>{categorias.nombre}</q>
                    <small>- {categorias.autor}</small>
                    </div>
                </>
                )} */}
          </div>
          <div className="TramistedGrid__grid-container container">
            {tramites.map((card, index) => (
              <a
                key={index}
                href={`/${info}/${card.id}` }
                style={{ all: "unset" }}
                target={card.external ? "_blank" : "_self"} // Open external links in a new tab
              >
                <div className="TramistedGrid__card">
                  <img
                    className={`TramistedGrid__cardimg ${
                      card.padding0 ? "padding-0" : ""
                    }`}
                    src={imagenes[card.icono]}
                    alt={card.titulo || "sin titulo"}
                  />
                  <h3 className="TramistedGrid__card-title">{card.titulo}</h3>
                  <small className="TramistedGrid__card-small">
                    {card.descripcion || "No hay descripcion"}
                  </small>
                </div>
              </a>
            ))}
          </div>
          {/* <div className={`TramistedGrid__btnGroup ${grid.gridBtnGroup ? 'gridBtnGroup': ''}`}>
  <button>
    Descargar Horarios
  </button>
  <button>
    Descargar Tramites Generales
  </button>
  <button>
    Descargar Todo
  </button>
</div> */}
          <div className="TramistedGrid__btnContainer">
            <a
              className={`TramistedGrid__btnVolver`}
              href="/"
            >
              <img src="/images/arrowback.svg" alt="back" />
              Volver
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default CategoriasTramites;
