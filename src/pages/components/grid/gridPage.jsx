import React from 'react';

const GridPage = ({ grid }) => {
  // Access the guiaDeTramites array inside the grid object
  const guiaDeTramites = grid.guiaDeTramites;

  return (
    <>
      <div className='Tramites__container'>
        <h1 style={{ textAlign: "center" }}>{grid.titulo}</h1>
        <div className="TramistedGrid__grid-container container">
          {guiaDeTramites.map((card, index) => (
            <a
              key={index}
              href={card.link}
              style={{ all: 'unset' }}
              target={card.external ? '_blank' : '_self'} // Open external links in a new tab
            >
              <div className="TramistedGrid__card">
                <img className="TramistedGrid__cardimg" src={card.img} alt={card.title} />
                <h3 className="TramistedGrid__card-title">{card.title}</h3>
                <small className="TramistedGrid__card-small">{card.descripcion}</small>
              </div>
            </a>
          ))}
        </div>
        <div className="TramistedGrid__btnContainer">
          <a className="TramistedGrid__btnVolver" href="/">
            <img src="../src/pages/images/arrowback.svg" alt="back" />
            Volver
          </a>
        </div>
      </div>
    </>
  );
};

export default GridPage;
