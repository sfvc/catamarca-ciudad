import React, { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const SearchBarPortal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tramites, setTramites] = useState([]);
  const [filteredTramites, setFilteredTramites] = useState([]);

  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const response = await catamarcaApi.get("/items/tramites");
        setTramites(response.data.data);
      } catch (error) {
        console.error("Error obteniendo trámites:", error);
      }
    };

    fetchTramites();
  }, []);

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const resultados = tramites.filter((tramite) =>
        tramite.titulo.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTramites(resultados);
    } else {
      setFilteredTramites([]);
    }
  };

  const handleSelect = (titulo) => {
    setSearchQuery(titulo);
    setFilteredTramites([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Buscando trámite:", searchQuery);
  };

  return (
    <div className="input-group">
      <label className="sr-only" htmlFor="edit-keys-new-home">
        Buscar en el sitio
      </label>
      <div className="input-search">
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
        {filteredTramites.length > 0 && (
          <ul className="search-results">
            {filteredTramites.map((tramite) => (
              <li key={tramite.id} onClick={() => handleSelect(tramite.titulo)}>
                {tramite.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span className="input-group-btn">
        <button type="submit" onClick={handleSubmit} aria-label="Buscar">
          <img className="input-group-btn-img" src="/images/lupa.svg" alt="Buscar" />
          <span className="sr-only">Buscar en el sitio</span>
        </button>
      </span>
    </div>
  );
};

export default SearchBarPortal;
