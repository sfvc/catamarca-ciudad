import React, { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const GridCategorias = ({ id }) => {
  // Access the guiaDeTramites array inside the grid object
  // const guiaDeTramites = grid.guiaDeTramites;
  const [categorias, setCategorias] = useState([]);
  const [imagenes, setImagenes] = useState({});
  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <></>
    // <>
    //   <div className="Tramites__container">
    //     <div
    //       className="container"
    //       style={{ textAlign: "center", maxWidth: "750px", minWidth: "auto" }}
    //     >
    //       <h1>{categorias.nombre}</h1>
    //       {/* {categorias (
    //       <>
    //         <div style={{marginBottom:"0.5rem"}}>
    //           <q style={{color:"#666"}}>{categorias.nombre}</q>
    //           <small>- {categorias.autor}</small>
    //         </div>
    //       </>
    //     )} */}
    //     </div>
    //     <div className="TramistedGrid__grid-container container">
    //       {categorias.map((card, index) => (
    //         <a
    //           key={index}
    //           href={card.url}
    //           style={{ all: "unset" }}
    //           target={card.external ? "_blank" : "_self"} // Open external links in a new tab
    //         >
    //           <div className="TramistedGrid__card">
    //             <img
    //               className={`TramistedGrid__cardimg ${
    //                 card.padding0 ? "padding-0" : ""
    //               }`}
    //               src={imagenes[card.icono]}
    //               alt={card.title}
    //             />
    //             <h3 className="TramistedGrid__card-title">{card.nombre}</h3>
    //             <small className="TramistedGrid__card-small">
    //               {card.descripcion}
    //             </small>
    //           </div>
    //         </a>
    //       ))}
    //     </div>
    //     {/* <div className={`TramistedGrid__btnGroup ${grid.gridBtnGroup ? 'gridBtnGroup': ''}`}>
    //       <button>
    //         Descargar Horarios
    //       </button>
    //       <button>
    //         Descargar Tramites Generales
    //       </button>
    //       <button>
    //         Descargar Todo
    //       </button>
    //     </div> */}
    //     <div className="TramistedGrid__btnContainer">
    //       <a
    //         className={`TramistedGrid__btnVolver ${
    //           grid.gridBtn ? "gridBtn" : ""
    //         }`}
    //         href="/"
    //       >
    //         <img src="/images/arrowback.svg" alt="back" />
    //         Volver
    //       </a>
    //     </div>
    //   </div>
    // </>
  );
};

export default GridCategorias;
