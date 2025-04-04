import React, { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const GridPage = ({ endpoint, titulo, href }) => {  // Recibe el endpoint como prop
  const [categorias, setCategorias] = useState([]);
  const [imagenes, setImagenes] = useState({});

  const cargarCategoriasTramite = async () => {
    try {
      const { data } = await catamarcaApi.get(endpoint);  // Usa el endpoint pasado como prop
      console.log(data);
      setCategorias(data.data);
      returnIcon(data.data);
    } catch (error) {
      console.error("Error al cargar los datos", error);
    }
  };

  useEffect(() => {
    if (endpoint) {
      cargarCategoriasTramite();  // Carga los datos solo si se pasa un endpoint
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
    <div className="Tramites__container">
      <div className="container" style={{ textAlign: "center", maxWidth: "750px", minWidth: "auto" }}>
        <h1>{titulo}</h1>
      </div>
      <div className="TramistedGrid__grid-container container">
        {categorias.map((card, index) => (
          <a
            key={index}
            href={`${href}/${card.id}`}
            style={{ all: "unset" }}
            target={card.external ? "_blank" : "_self"}
          >
            <div className="TramistedGrid__card">
              <img
                className={`TramistedGrid__cardimg ${card.padding0 ? "padding-0" : ""}`}
                src={imagenes[card.icono]}
                alt={card.title}
              />
              <h3 className="TramistedGrid__card-title">{card.nombre}</h3>
              <small className="TramistedGrid__card-small">{card.descripcion}</small>
            </div>
          </a>
        ))}
      </div>
      <div className="TramistedGrid__btnContainer">
        <a className="TramistedGrid__btnVolver gridBtn" href="/">
          <img src="/images/arrowback.svg" alt="back" />
          Volver
        </a>
      </div>
    </div>
  );
};

export default GridPage;
