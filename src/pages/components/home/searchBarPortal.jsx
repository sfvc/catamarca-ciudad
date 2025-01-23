import React, { useState } from "react";

const SearchBarPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="input-group">
      <label className="sr-only" htmlFor="edit-keys-new-home">
        Buscar en el sitio
      </label>
      <div  className="input-search">

        <input
            id="edit-keys-new-home"
            className="input-search-input"
            placeholder="¿Necesitás hacer un trámite? Buscalo en TRAMITAR por tema o palabra clave"
            aria-label="Buscar trámites, servicios o áreas"
            type="text"
            value={searchQuery}
            onChange={handleChange}
            name="keys"
        />
      </div>
      <span className="input-group-btn">
        <button
          type="submit"
          onClick={handleSubmit}
          aria-label="Buscar"
        >
          <img className="input-group-btn-img" src="/images/lupa.svg" alt="Buscar" />
          <span className="sr-only">Buscar en el sitio</span>
        </button>
      </span>
    </div>
  );
};

export default SearchBarPortal;
