import React, { useRef } from "react";

export const PortalARG = ({ jumbotronRef, searchQuery, handleChange, inputRef }) => {
  return (
    <section className="jumbotron video-banner">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/Nodo.mp4" type="video/mp4" />
        Tu navegador no soporta el video en HTML5.
      </video>

      <div className="jumbatron-container">
        <div className="jumbotron_body">
          <div className="container">
                <header className="home-new input__div">
                  <h1 className="home_titulo">
                    Portal oficial de la Municipalidad de Catamarca
                  </h1>

                  <div className="input-group" ref={jumbotronRef}>
                    <input
                      id="edit-keys-new-home"
                      className="input-search-input"
                      placeholder="Buscar"
                      aria-label="Buscar trámites, servicios o áreas"
                      type="text"
                      value={searchQuery}
                      onChange={handleChange}
                      name="keys"
                      autoComplete="off"
                      ref={inputRef}
                    />
                  </div>
                </header>
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </section>
  );
};

