import { useEffect, useRef, useState } from "react";
import ModalMobile from "@components/common/modalMobile";
import { catamarcaApi } from "@api/catamarcaApi";
import { PortalARG } from "./portalarg";

const SearchBarPortal = ({ jumbotronRef }) => {
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023.98);
  const [tramites, setTramites] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const handleChange = (event) => setSearchQuery(event.target.value);
  const handleInputClick = () => setSearchMobileOpen(true);

  // Escuchamos el ref del input visual
  useEffect(() => {
    if (jumbotronRef?.current) {
      jumbotronRef.current.addEventListener("click", handleInputClick);
    }
    return () => {
      if (jumbotronRef?.current) {
        jumbotronRef.current.removeEventListener("click", handleInputClick);
      }
    };
  }, [jumbotronRef]);

  useEffect(() => {
  const updateModalPosition = () => {
    if (jumbotronRef?.current) {
      const rect = jumbotronRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  updateModalPosition(); // Llamalo al inicio

  window.addEventListener("resize", updateModalPosition);
  window.addEventListener("scroll", updateModalPosition); // Opcional si scrolleás la página

  return () => {
    window.removeEventListener("resize", updateModalPosition);
    window.removeEventListener("scroll", updateModalPosition);
  };
}, [jumbotronRef]);

  // Detecta si es mobile
  useEffect(() => {
    const resizeHandler = () => {
      setIsMobile(window.innerWidth <= 1023.98);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 400);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (inputRef.current && !isMobile && debouncedQuery) {
      const rect = inputRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [debouncedQuery, isMobile]);

  // Fetch
  useEffect(() => {
    const fetchTramites = async () => {
      if (!debouncedQuery) return setTramites([]);
      setIsLoading(true);
      try {
        const response = await catamarcaApi.get(
          `/items/tramites?filter[titulo][_contains]=${debouncedQuery}&sort=-titulo&limit=5`
        );
        setTramites(response.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTramites();
  }, [debouncedQuery]);

  return (
    <>
      <PortalARG
        jumbotronRef={jumbotronRef}
        inputRef={inputRef} // 👈 nuevo ref
        searchQuery={searchQuery}
        handleChange={handleChange}
      />

      {isMobile && searchMobileOpen && (
        <SearchModalMobile
          onClose={() => setSearchMobileOpen(false)}
          handleChange={handleChange}
          tramites={tramites}
          debouncedQuery={debouncedQuery}
          isLoading={isLoading}
          searchQuery={searchQuery}
        />
      )}

      {!isMobile && debouncedQuery && (
        <SearchModalDeskopt
          tramites={tramites}
          debouncedQuery={debouncedQuery}
          isLoading={isLoading}
          modalPosition={modalPosition} // 👈
        />
      )}
    </>
  );
};

const SearchModalDeskopt = ({
  tramites,
  debouncedQuery,
  isLoading,
  modalPosition,
}) => {
  if (!debouncedQuery) return null;

  return (
    <div
      className="searchModalDeskopt"
      style={{
        position: "absolute",
        top: modalPosition.top,
        left: modalPosition.left + modalPosition.width / 2, // 👈 ponelo en el centro del input
        transform: "translateX(-50%)", // 👈 movelo hacia la izquierda la mitad del ancho
        zIndex: 3,
        width: modalPosition.width + 0, // opcional, si querés que el modal sea más ancho
      }}
    >
      <ul className="searchModalDeskopt__list">
        {tramites.length > 0 ? (
          tramites.map((tramite) => (
            <li key={tramite.id}>
              <a
                className="searchModalDeskopt__list-item"
                href={`/infoTramites/${tramite.id}`}
              >
                <div className="searchModalDeskopt__list-item-div">
                  <img
                    className="searchModalDeskopt__list-item-img"
                    src="/images/tramiteDefault.svg"
                    alt=""
                    style={{ width: "36px", height: "24px" }}
                  />
                  <p className="searchModalDeskopt__list-item-p">
                    {tramite.titulo} - {tramite.descripcion}
                  </p>
                </div>
                <small className="searchModalDeskopt__list-item-small">
                  Tramite
                </small>
              </a>
            </li>
          ))
        ) : (
          <li className="searchModalDeskopt__list-item">
            <div className="searchModalDeskopt__list-item-div">
              <p className="searchModalDeskopt__list-item-p">
                {isLoading ? "Cargando..." : "No se encontraron resultados"}
              </p>
            </div>
            <small className="searchModalDeskopt__list-item-small">
              Tramite
            </small>
          </li>
        )}
        <li className="searchModalDeskopt__list-item-vermas">
          <a
            className="searchModalDeskopt__list-item-vermas-a"
            href="/buscadorSFVC"
          >
            <span>Ver más</span>
            <img
              className="searchModalDeskopt__list-item-img"
              src="/images/arrownext.svg"
              alt=""
              style={{ width: "36px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

const SearchModalMobile = ({
  onClose,
  tramites,
  debouncedQuery,
  isLoading,
  searchQuery,
  handleChange,
}) => {
  return (
    <ModalMobile className="custom-zindex" isOpen={true} onClose={onClose}>
      <div
        className="searchModalDeskopt__list--mobile"
        onClick={(e) => e.stopPropagation()} // <- Este bloquea la propagación
      >
        <ul className="searchModalDeskopt__list">
          {tramites.length > 0 ? (
            tramites.map((tramite) => (
              <li key={tramite.id}>
                <a
                  className="searchModalDeskopt__list-item"
                  href={`/infoTramites/${tramite.id}`}
                >
                  <div className="searchModalDeskopt__list-item-div">
                    <img
                      className="searchModalDeskopt__list-item-img"
                      src="/images/menu.svg"
                      alt=""
                      style={{ width: "36px" }}
                    />
                    <p className="searchModalDeskopt__list-item-p">
                      {tramite.titulo} - {tramite.descripcion}
                    </p>
                  </div>
                  <small className="searchModalDeskopt__list-item-small">
                    Tramite
                  </small>
                </a>
              </li>
            ))
          ) : (
            <li className="searchModalDeskopt__list-item">
              <div className="searchModalDeskopt__list-item-div">
                <p className="searchModalDeskopt__list-item-p">
                  {isLoading ? "Cargando..." : "No se encontraron resultados"}
                </p>
              </div>
              <small className="searchModalDeskopt__list-item-small">
                Tramite
              </small>
            </li>
          )}
          <li className="searchModalDeskopt__list-item-vermas">
            <a
              className="searchModalDeskopt__list-item-vermas-a"
              href="/buscadorSFVC"
            >
              <span>Ver mas</span>
              <img
                className="searchModalDeskopt__list-item-img"
                src="/images/arrownext.svg"
                alt=""
                style={{ width: "36px" }}
              />
            </a>
          </li>
        </ul>
        <span className="searchModalDeskopt__list-item-span-mobile">
          <InputSearch
            className="searchModalDeskopt__list-item-input-mobile"
            searchQuery={searchQuery}
            handleChange={handleChange}
          />
        </span>
      </div>
    </ModalMobile>
  );
};

const InputSearch = ({ searchQuery, handleChange, className }) => {
  return (
    <input
      id="edit-keys-new-home"
      className={className || `input-search-input`}
      placeholder="Buscar"
      aria-label="Buscar trámites, servicios o áreas"
      type="text"
      value={searchQuery}
      onChange={handleChange}
      name="keys"
      autoComplete="off"
    />
  );
};

export default SearchBarPortal;
