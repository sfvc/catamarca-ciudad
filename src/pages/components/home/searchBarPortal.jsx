import React, { useEffect, useRef, useState } from "react";
import Modal from "../common/modal";
import ModalMobile from "../common/modalMobile";

const SearchBarPortal = () => {
  const searchRef = useRef();
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);  // Track if window is mobile-sized

  // Handle search query change
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  // Detect window resize and set mobile state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023.98); // Set to true if window width is below 1024px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  // Handle modal open for mobile view
  useEffect(() => {
    if (isMobile) {
      setSearchMobileOpen(false);  // Close modal on mobile screens when resizing
    }
  }, [isMobile]);

  // Open the modal when the input group is clicked
  const handleInputClick = () => {
    setSearchMobileOpen(true);  // Open modal on input click
  };

  // Close the modal
  const handleCloseModal = () => {
    setSearchMobileOpen(false);  // Close the modal
  };

  return (
    <div className="input-group" ref={isMobile ? searchRef : null} onClick={handleInputClick}>
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

      {/* Conditionally render the search modal for desktop or mobile */}
      {isMobile && searchMobileOpen && <SearchModalMobile onClose={handleCloseModal} />}
      {!isMobile && <SearchModalDeskopt />}
    </div>
  );
};

const SearchModalDeskopt = () => {
  return (
    <div className="searchModalDeskopt">
      <ul className="searchModalDeskopt__list">
        <li className="searchModalDeskopt__list-item">
          <div className="searchModalDeskopt__list-item-div">
            <img className="searchModalDeskopt__list-item-img" src="/images/menu.svg" alt="" style={{ width: '36px' }} />
            <p className="searchModalDeskopt__list-item-p">
              Se Lanzo mi aplicacion catamarca ciudad en el municipio parque el jumeal parque
            </p>
          </div>
          <small className="searchModalDeskopt__list-item-small">Tramite</small>
        </li>
        <li className="searchModalDeskopt__list-item">
          <div className="searchModalDeskopt__list-item-div">
            <img className="searchModalDeskopt__list-item-img" src="/images/mariano.jpeg" alt="" style={{ width: '36px' }} />
            <p className="searchModalDeskopt__list-item-p">
              Funcionarios lanza nuevo proyecto en la municipalidad
            </p>
          </div>
          <small className="searchModalDeskopt__list-item-small">Noticias</small>
        </li>
        <li className="searchModalDeskopt__list-item">
          <div className="searchModalDeskopt__list-item-div">
            <img className="searchModalDeskopt__list-item-img" src="/images/link.svg" alt="" style={{ width: '36px' }} />
            <p className="searchModalDeskopt__list-item-p">
              Se Lanzo mi aplicacion catamarca ciudad en el municipio parque el jumeal parque
            </p>
          </div>
          <small className="searchModalDeskopt__list-item-small">Link</small>
        </li>
        <li className="searchModalDeskopt__list-item">
          <div className="searchModalDeskopt__list-item-div">
            <img className="searchModalDeskopt__list-item-img" src="/images/mariano.jpeg" alt="" style={{ width: '36px' }} />
            <p className="searchModalDeskopt__list-item-p">
              Funcionarios lanza nuevo proyecto en la municipalidad
            </p>
          </div>
          <small className="searchModalDeskopt__list-item-small">Noticias</small>
        </li>


        <li className="searchModalDeskopt__list-item-vermas">
          <a className="searchModalDeskopt__list-item-vermas-a" href="/buscadorSFVC">
            <span>Ver mas</span>
            <img className="searchModalDeskopt__list-item-img" src="/images/arrownext.svg" alt="" style={{ width: '36px' }} />
          </a>
        </li>
      </ul>
    </div>
  );
};

const SearchModalMobile = ({ onClose }) => {
  return (
    <ModalMobile isOpen={true} onClose={onClose}>
      <div>
        <ul className="searchModalDeskopt__list">
          <li className="searchModalDeskopt__list-item">
            <div className="searchModalDeskopt__list-item-div">
              <img className="searchModalDeskopt__list-item-img" src="/images/menu.svg" alt="" style={{ width: '36px' }} />
              <p className="searchModalDeskopt__list-item-p">
                Se Lanzo mi aplicacion catamarca ciudad en el municipio parque el jumeal parque
              </p>
            </div>
            <small className="searchModalDeskopt__list-item-small">Tramite</small>
          </li>
          <li className="searchModalDeskopt__list-item">
            <div className="searchModalDeskopt__list-item-div">
              <img className="searchModalDeskopt__list-item-img" src="/images/mariano.jpeg" alt="" style={{ width: '36px' }} />
              <p className="searchModalDeskopt__list-item-p">
                Funcionarios lanza nuevo proyecto en la municipalidad
              </p>
            </div>
            <small className="searchModalDeskopt__list-item-small">Noticias</small>
          </li>
          <li className="searchModalDeskopt__list-item">Item 3</li>
          <li className="searchModalDeskopt__list-item">Item 4</li>
          <li className="searchModalDeskopt__list-item-vermas">
            <a className="searchModalDeskopt__list-item-vermas-a" href="/buscadorSFVC">
              <span>Ver mas</span>
              <img className="searchModalDeskopt__list-item-img" src="/images/arrownext.svg" alt="" style={{ width: '36px' }} />
            </a>
          </li>
        </ul>
        <span className="searchModalDeskopt__list-item-span-mobile">
          <input className="searchModalDeskopt__list-item-input-mobile" type="text" placeholder="buscar"/>
        </span>
      </div>
    </ModalMobile>
  );
};

export default SearchBarPortal;
