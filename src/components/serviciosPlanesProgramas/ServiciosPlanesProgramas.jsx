import { useEffect, useState, useRef } from "react";
import { catamarcaApi } from "@api/catamarcaApi";
import Cargando from "@components/common/Cargando";
import NoEncontrado from "@components/common/NoEncontrado";

const LIMIT = 5;

const ServiciosPlanesProgramasComponent = () => {
  return (
    <main className="container buscador">
      <section className="buscador__content">
        <BuscadorContent />
      </section>
    </main>
  );
};

const BuscadorContent = () => {
  const [programas, setProgramas] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const panelRefs = useRef([]);

  const fetchProgramas = async (query, page = 1) => {
    setIsLoading(true);

    const params = {
      meta: "total_count,filter_count",
      sort: "-titulo",
      fields: "*",
      limit: LIMIT,
      page,
    };

    if (query) {
      params["filter[titulo][_icontains]"] = query;
    }

    try {
      const response = await catamarcaApi.get("/items/planes_programas", {
        params,
      });

      const data = response.data.data;
      const meta = response.data.meta;

      setProgramas(data);
      setTotalPages(Math.ceil(meta.filter_count / LIMIT));
      setCurrentPage(page);

      const apiUrl = catamarcaApi.defaults.baseURL || "";
      const nuevasImagenes = data
        .filter((item) => item.imagen)
        .reduce((acc, item) => {
          acc[item.imagen] = `${apiUrl}/assets/${item.imagen}`;
          return acc;
        }, {});

      setImagenes(nuevasImagenes);
    } catch (error) {
      console.error("Error obteniendo programas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectPage = (page) => {
    setCurrentPage(page);
    fetchProgramas(debouncedQuery, page);
  };

  const previusPage = () => {
    if (currentPage > 1) {
      selectPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      selectPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    fetchProgramas(debouncedQuery, 1);
  }, [debouncedQuery]);

  return (
    <>
      <section className="buscador__search">
        <div className="buscador__search__container">
          <input
            id="search-input"
            className="buscador__search__input"
            type="text"
            placeholder="Buscar Planes y Programas"
            aria-label="Buscar programas"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <div className="programas container">
        {isLoading ? (
          <Cargando />
        ) : (
          <div className="programas__lista">
            {programas.length > 0 ? (
              programas.map((item, index) => (
                <div className="programas__item" key={item.id}>
                  <a
                    className="programas__link"
                    title={item.titulo}
                    href={item.url}
                    ref={(el) => (panelRefs.current[index] = el)}
                  >
                    {item.imagen && imagenes[item.imagen] ? (
                      <img
                        src={imagenes[item.imagen]}
                        alt={item.titulo}
                        className="programas__imagen"
                      />
                    ) : (
                      <i
                        className={`programas__icono atajo_faIcon__3OjA_ ${item.imagen}`}
                      />
                    )}
                    <div className="programas__contenido">
                      <h3 className="programas__titulo-item">{item.titulo}</h3>
                      <p className="programas__descripcion" aria-hidden="true">
                        {item.descripcion}
                      </p>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <NoEncontrado />
            )}
          </div>
        )}
      </div>

      <section className="buscador__pagination">
        <BuscadorPaginated
          currentPage={currentPage}
          totalPages={totalPages}
          previusPage={previusPage}
          nextPage={nextPage}
          selectPage={selectPage}
        />
      </section>

          <div class="container">
    <div class="botonflujo">
      <a href="/" class="btn btn-primary"> Volver a Pagina de Inicio </a>
    </div>
  </div>
    </>
  );
};

const generatePageNumbers = (currentPage, totalPages) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [1];
  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("...");

  pages.push(totalPages);
  return pages;
};

const BuscadorPaginated = ({
  currentPage,
  totalPages,
  previusPage,
  nextPage,
  selectPage,
}) => {
  return (
    <div className="buscador__pagination__controls">
      <button
        className="buscador__pagination__button"
        aria-label="Página anterior"
        onClick={previusPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {generatePageNumbers(currentPage, totalPages).map((page, index) => (
        <button
          key={index}
          className={
            page === currentPage
              ? "active buscador__pagination__button"
              : "buscador__pagination__button"
          }
          onClick={() => typeof page === "number" && selectPage(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="buscador__pagination__button"
        aria-label="Página siguiente"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default ServiciosPlanesProgramasComponent;
