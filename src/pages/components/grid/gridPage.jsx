import React, { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const GridPage = () => {
  // Access the guiaDeTramites array inside the grid object
  // const guiaDeTramites = grid.guiaDeTramites;
  const [categorias, setCategorias] = useState([]);
  const [imagenes, setImagenes] = useState({});

  const cargarCategoriasTramite = async () => {
    const { data } = await catamarcaApi.get("items/categoria_tramites");
    setCategorias(data.data);
    returnIcon(data.data);
  }

  useEffect(() => {
    cargarCategoriasTramite();
  }, []);


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

  console.log(categorias);
  return (
    <>
      <div className="Tramites__container">
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "750px", minWidth: "auto" }}
        >
          <h1>{categorias.nombre}</h1>
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
          {categorias.map((card, index) => (
            <a
              key={index}
              href={card.url}
              style={{ all: "unset" }}
              target={card.external ? "_blank" : "_self"} // Open external links in a new tab
            >
              <div className="TramistedGrid__card">
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
            className={`TramistedGrid__btnVolver ${
              "gridBtn"
            }`}
            href="/"
          >
            <img src="/images/arrowback.svg" alt="back" />
            Volver
          </a>
        </div>
      </div>
    </>
  );
};

export default GridPage;
