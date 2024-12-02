import React from 'react';

const GridPage = ({ grid }) => {
  // Access the guiaDeTramites array inside the grid object
  const guiaDeTramites = grid.guiaDeTramites;

  return (
    <>
      <div className='Tramites__container'>
        <div className='container m-y-2'style={{ textAlign: "center", maxWidth: "750px", minWidth:"auto" }}>
          <h1>{grid.titulo}</h1>
        {grid && grid.descripcion && grid.autor ? (
          <>
            <q style={{color:"#666"}}>{grid.descripcion}</q>
            <small>- {grid.autor}</small>
          </>
        ) : null}
        </div>
        <div className="TramistedGrid__grid-container container">
          {guiaDeTramites.map((card, index) => (
            <a
              key={index}
              href={card.link}
              style={{ all: 'unset' }}
              target={card.external ? '_blank' : '_self'} // Open external links in a new tab
            >
              <div className="TramistedGrid__card">
                <img className={`TramistedGrid__cardimg ${card.padding0 ? 'padding-0' : ''}`} src={card.img} alt={card.title} />
                <h3 className="TramistedGrid__card-title">{card.title}</h3>
                <small className="TramistedGrid__card-small">{card.descripcion}</small>
              </div>
            </a>
          ))}
        </div>
        <div className={`TramistedGrid__btnGroup ${grid.gridBtnGroup ? 'gridBtnGroup': ''}`}>
          <button>
            Descargar Horarios
          </button>
          <button>
            Descargar Tramites Generales
          </button>
          <button>
            Descargar Todo
          </button>
        </div>
        <div className="TramistedGrid__btnContainer">
          <a className={`TramistedGrid__btnVolver ${grid.gridBtn ? 'gridBtn' : ''}`} href="/">
            <img src="/images/arrowback.svg" alt="back" />
            Volver
          </a>
        </div>
      </div>
    </>
  );
};

export default GridPage;
