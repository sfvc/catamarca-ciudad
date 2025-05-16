import { useEffect, useState } from "react";
import { getTramites } from "@helpers/getTramites";

const LIMIT = 5

const BuscadorMain = () => {
  // const [query, setQuery] = useState(null);

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const categoria = params.get("categoria");
  //   setQuery(categoria);
  // }, []);

  const params = new URLSearchParams(window.location.search);
  const categoriaId = params.get("categoria");

  return (
    <main className="container buscador">
      <section className="buscador__content">
        <BuscadorContent category={categoriaId}/>
      </section>
    </main>
  );
};

const BuscadorContent = ({ category }) => {
  const [tramites, setTramites] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoriaId, setCategoriaId] = useState(category);
  const [currentPage, setCurrentPage] = useState(1)

  const fetchTramites = async (query, page = 1, category) => {
    setIsLoading(true)
    
    try {
      const response = await getTramites(query, page, category)
      const { data, meta } = response
      setTramites(data)

      const totalPages = calculateTotalPages(meta.filter_count)
      setTotalPages(totalPages)
      setCurrentPage(page)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const calculateTotalPages = (total_count) => {
    const total = Math.ceil(total_count / LIMIT)
    return total
  }

  const previusPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const selectPage = (value) => {
    setCurrentPage(value)
    fetchTramites(searchQuery, value)
  }

  useEffect(() => {
    if(categoriaId) setCategoriaId(null)

    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => {
      clearTimeout(handler)
    };
  }, [searchQuery]);

  useEffect(() => {
    // fetchTramites(debouncedQuery)

    fetchTramites(debouncedQuery, 1, categoriaId);
  }, [debouncedQuery, category]);

  return (
      <>
        <section className="buscador__search">
          <div className="buscador__search__container">
            <input
              id="search-input"
              className="buscador__search__input"
              type="text"
              placeholder="Busca en la Municipalidad Tramites"
              aria-label="Search input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <div>
          {
            tramites.length > 0
            ? tramites.map((tramite) => (
                <div className="panel panel-default panel-icon panel-secondary tramite-container" key={tramite.id} href="#">
                    <div className="panel-body">
                      <h3>{tramite.nombre}</h3>
                      <p className="text-muted tramite-description">{tramite.objeto}</p>

                      <div className="tramite-footer">
                        <div>
                          <span className="ribbon"
                            ><i className="fa fa-desktop text-arandano"></i> {tramite.modalidad}</span
                          >

                          <span className="ribbon"
                            ><i className="fa fa-tag text-arandano"></i>
                            {tramite.categoria.nombre}</span
                          >
                        </div>
                        <a href={`/infoTramites/${tramite.id}`} className="btn btn-primary">Ver más</a>
                      </div>
                    </div>
                </div>
              ))
            : <span>{isLoading ? 'Cargando...' : 'No se encontraron resultados'}</span>
          }
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
      </>
  );
};

const generatePageNumbers = (currentPage, totalPages) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];
  pages.push(1); // Siempre muestra la primera página

  let start = Math.max(2, currentPage - 2);
  let end = Math.min(totalPages - 1, currentPage + 2);

  if (start > 2) {
    pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) {
    pages.push("...");
  }

  pages.push(totalPages); // Siempre muestra la última página

  return pages;
};

const BuscadorPaginated = ({ currentPage, totalPages, previusPage, nextPage, selectPage }) => {
  return (
    <div className="buscador__pagination__controls">
      <button className="buscador__pagination__button" aria-label="Previous page" onClick={previusPage} disabled={currentPage === 1}>
        &lt;
      </button>

      {generatePageNumbers(currentPage, totalPages).map((page, index) => (
        <button
          key={index}
          className={page === currentPage ? "active buscador__pagination__button" : " buscador__pagination__button"}
          onClick={() => typeof page === "number" && selectPage(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button className="buscador__pagination__button" aria-label="Next page" onClick={nextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
};

export default BuscadorMain;
