import { useEffect, useState } from "react";
import { api } from "../../../service/httpService";

const BuscadorMain = () => {
    return (
      <main className="container buscador">
          <section className="buscador__content">
              <BuscadorContent />
          </section>
          <footer className="buscador__footer">
              <BuscadorFooter />
          </footer>
      </main>
    );
};

const BuscadorContent = () => {
  const [tramites, setTramites] = useState([])
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1)

  // Fetching from data
  const fetchTramites = async (query) => {
    setIsLoading(true)
    let params = {
      sort: '-titulo',
      limit: '5'
    }

    if(query) {
      params['filter[titulo][_icontains]='] = query
    }
    
    try {
      const response = await api.get(`/tramites`, { params })
      const { data } = response.data
      setTramites(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const previusPage = () => {
    setPage((prevPage) => prevPage - 1)
  }

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
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
                    <td className="buscador__content__table-data">{tramite.titulo}</td>
                    <td className="buscador__content__table-data"><small>{tramite.descripcion}</small></td>
                  </tr>
                ))
              : <tr>{isLoading ? 'Cargando...' : 'No se encontraron resultados'}</tr>
            }
          </tbody>
        </table>

        <section className="buscador__pagination">
          <BuscadorPaginated 
            page={page}
            previusPage={previusPage}
            nextPage={nextPage}
          />
        </section>
      </>
  );
};

const BuscadorPaginated = ({ page, previusPage, nextPage }) => {
  return (
    <div className="buscador__pagination__controls">
      <button className="buscador__pagination__button" aria-label="Previous page" onClick={previusPage}>
        &lt;
      </button>
      <button className="buscador__pagination__button" aria-label="Next page" onClick={nextPage}>
        &gt;
      </button>
    </div>
  );
};

const BuscadorFilter = () => {
    return (
        <>
            <button className="buscador__filter__button">Tramites</button>
            <button className="buscador__filter__button">Noticias</button>
            <button className="buscador__filter__button">Links</button>
        </>
    );
};

const BuscadorFooter = () => {
    return (
        <div className="buscador__footer__info">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    );
};

export default BuscadorMain;
