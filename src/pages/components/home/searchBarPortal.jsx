import { useEffect, useRef, useState } from "react";
import ModalMobile from "../common/modalMobile";
import { catamarcaApi } from "../../../api/catamarcaApi";

const SearchBarPortal = () => {
  const searchRef = useRef();
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);  // Track if window is mobile-sized
  const [tramites, setTramites] = useState([])
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle search query change
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
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

  // Fetching from data
  const fetchTramites = async (query) => {
    setIsLoading(true)
    try {
      const response = await catamarcaApi.get(`/items/tramites?filter[titulo][_contains]=${query}&sort=-titulo&limit=5`)
      const { data } = response.data
      setTramites(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  } 

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => {
      clearTimeout(handler)
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      fetchTramites(debouncedQuery)
    } else {
      setTramites([])
    }
  }, [debouncedQuery]);

  return (
    <div className="input-group" ref={isMobile ? searchRef : null} onClick={handleInputClick}>
      <label className="sr-only" htmlFor="edit-keys-new-home">
        Buscar en el sitio
      </label>

      <InputSearch searchQuery={searchQuery} handleChange={handleChange} />

      {/* Conditionally render the search modal for desktop or mobile */}
      {
        (isMobile && searchMobileOpen) && 
        <SearchModalMobile 
          onClose={handleCloseModal} 
          handleChange={handleChange}
          tramites={tramites} 
          debouncedQuery={debouncedQuery} 
          isLoading={isLoading}
        />
      }

      {
        !isMobile && 
        <SearchModalDeskopt 
          tramites={tramites} 
          debouncedQuery={debouncedQuery} 
          isLoading={isLoading}
          searchQuery={searchQuery}
        />
      }
    </div>
  );
};

const SearchModalDeskopt = ({tramites, debouncedQuery, isLoading}) => {
  return (
    <>
      {
        debouncedQuery && 
        <div className="searchModalDeskopt">
          <ul className="searchModalDeskopt__list">
            {
              tramites.length > 0
              ? tramites.map((tramite) => (
                <li className="searchModalDeskopt__list-item">
                  <div className="searchModalDeskopt__list-item-div">
                    <img className="searchModalDeskopt__list-item-img" src="/images/menu.svg" alt="" style={{ width: '36px' }} />
                    <p className="searchModalDeskopt__list-item-p">
                      {tramite.titulo} - {tramite.descripcion}
                    </p>
                  </div>
                  <small className="searchModalDeskopt__list-item-small">Tramite</small>
                </li>
              ))
              : 
              <li className="searchModalDeskopt__list-item">
                <div className="searchModalDeskopt__list-item-div">
                  <p className="searchModalDeskopt__list-item-p">{isLoading ? 'Cargando...' : 'No se encontraron resultados'}</p>
                </div>
                <small className="searchModalDeskopt__list-item-small">Tramite</small>
              </li>
            }
            <li className="searchModalDeskopt__list-item-vermas">
              <a className="searchModalDeskopt__list-item-vermas-a" href="/buscadorSFVC">
                <span>Ver mas</span>
                <img className="searchModalDeskopt__list-item-img" src="/images/arrownext.svg" alt="" style={{ width: '36px' }} />
              </a>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

const SearchModalMobile = ({ onClose, tramites, debouncedQuery, isLoading }) => {
  return (
    <ModalMobile isOpen={true} onClose={onClose}>
      <div>
        <ul className="searchModalDeskopt__list">
          {
            tramites.length > 0
            ? tramites.map((tramite) => (
              <li className="searchModalDeskopt__list-item">
                <div className="searchModalDeskopt__list-item-div">
                  <img className="searchModalDeskopt__list-item-img" src="/images/menu.svg" alt="" style={{ width: '36px' }} />
                  <p className="searchModalDeskopt__list-item-p">
                    {tramite.titulo} - {tramite.descripcion}
                  </p>
                </div>
                <small className="searchModalDeskopt__list-item-small">Tramite</small>
              </li>
            ))
            : 
            <li className="searchModalDeskopt__list-item">
              <div className="searchModalDeskopt__list-item-div">
                <p className="searchModalDeskopt__list-item-p">{isLoading ? 'Cargando...' : 'No se encontraron resultados'}</p>
              </div>
              <small className="searchModalDeskopt__list-item-small">Tramite</small>
            </li>
          }
          <li className="searchModalDeskopt__list-item-vermas">
            <a className="searchModalDeskopt__list-item-vermas-a" href="/buscadorSFVC">
              <span>Ver mas</span>
              <img className="searchModalDeskopt__list-item-img" src="/images/arrownext.svg" alt="" style={{ width: '36px' }} />
            </a>
          </li>
        </ul>

        <span className="searchModalDeskopt__list-item-span-mobile">
          {/* <input className="searchModalDeskopt__list-item-input-mobile" type="text" placeholder="buscar"/> */}
          <InputSearch className='searchModalDeskopt__list-item-input-mobile' />
        </span>
      </div>
    </ModalMobile>
  );
};

const InputSearch = ({searchQuery, handleChange, className}) => {
  return (
    <input
      id="edit-keys-new-home"
      className={className || `input-search-input`}
      placeholder="¿Necesitás hacer un trámite? Buscalo en TRAMITAR por tema o palabra clave"
      aria-label="Buscar trámites, servicios o áreas"
      type="text"
      value={searchQuery}
      onChange={handleChange}
      name="keys"
      autoComplete="off"
    />
  )
}

export default SearchBarPortal;
