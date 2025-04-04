import { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const BuscadorMain = () => {
    return (
      <main className="container buscador">
          <section className="buscador__content">
              <BuscadorContent />
          </section>

          <footer className="buscador__footer">
            <div className="buscador__footer__info">
              <p>&copy; 2025 Your Company. All rights reserved.</p>
            </div>
          </footer>
      </main>
    );
};

const LIMIT = 5

const BuscadorContent = () => {
  const [tramites, setTramites] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

  // Fetching from data
  const fetchTramites = async (query, page = 1) => {
    setIsLoading(true)
    let params = {
      meta: 'total_count,filter_count',
      sort: '-titulo',
      limit: LIMIT,
      page
    }

    if(query) {
      params['filter[titulo][_icontains]='] = query
    }
    
    try {
      const response = await catamarcaApi.get(`items/tramites`, { params })
      const { data, meta } = response.data
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
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 500)

    return () => {
      clearTimeout(handler)
    };
  }, [searchQuery]);

  useEffect(() => {
    fetchTramites(debouncedQuery)
  }, [debouncedQuery]);

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

        <table className="buscador__content__table">
          <thead>
            <tr>
              <th className="buscador__content__table-header"></th>
              <th className="buscador__content__table-header tablemain ">Titulo</th>
              <th className="buscador__content__table-header">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {
              tramites.length > 0
              ?
                tramites.map((tramite) => (
                  <tr key={tramite.id}>
                    <td className="buscador__content__table-data-logo"><img src="/images/solPatrio.svg" alt="Image" /></td>
                    <td className="buscador__content__table-data"><a href={`/infoTramites/${tramite.id}`}>{tramite.titulo}</a></td>
                    <td className="buscador__content__table-data"><small>{tramite.descripcion}</small></td>
                  </tr>
                ))
              : <tr>{isLoading ? 'Cargando...' : 'No se encontraron resultados'}</tr>
            }
          </tbody>
        </table>

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
          className={page === currentPage ? "active" : ""}
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

/* const BuscadorFilter = () => {
    return (
      <>
        <button className="buscador__filter__button">Tramites</button>
        <button className="buscador__filter__button">Noticias</button>
        <button className="buscador__filter__button">Links</button>
      </>
    );
}; */

export default BuscadorMain;
