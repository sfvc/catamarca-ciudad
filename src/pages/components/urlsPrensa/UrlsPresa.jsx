
const UrlsPrensa = () => {
    return (
        <main className="container buscador">
            <h1>Urls para Prensa</h1>
            <section className="buscador__search">
                <BuscadorSearch />
            </section>
            <section className="buscador__filter">
                <BuscadorFilter />
            </section>
            <section className="buscador__content">
                <BuscadorContent />
            </section>
            <section className="buscador__pagination">
                <BuscadorPaginated />
            </section>
            <footer className="buscador__footer">
                <BuscadorFooter />
            </footer>
        </main>
    );
};

const BuscadorContent = () => {
    return (
        <table className="buscador__content__table">
            <thead>
                <tr>
                    <th className="buscador__content__table-header"></th>
                    <th className="buscador__content__table-header tablemain ">Titulo</th>
                    <th className="buscador__content__table-header">Categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="buscador__content__table-data-logo"><img src="/images/solPatrio.svg" alt="Image" /></td>
                    <td className="buscador__content__table-data">Content Item 3</td>
                    <td className="buscador__content__table-data"><small>Category Name</small></td>
                </tr>
                <tr>
                    <td className="buscador__content__table-data-logo"><img src="/images/solPatrio.svg" alt="Image"/></td>
                    <td className="buscador__content__table-data">Content Item 4</td>
                    <td className="buscador__content__table-data"><small>Another Category</small></td>
                </tr>
            </tbody>
        </table>

    );
};

const BuscadorSearch = () => {
    return (
        <div className="buscador__search__container">
            <input
                id="search-input"
                className="buscador__search__input"
                type="text"
                placeholder="Busca en la Municipalidad Tramites, Noticias y Links"
                aria-label="Search input"
            />
        </div>
    );
};

const BuscadorPaginated = () => {
    return (
        <div className="buscador__pagination__controls">
            <button className="buscador__pagination__button" aria-label="Previous page">
                &lt;
            </button>
            <button className="buscador__pagination__button" aria-label="Next page">
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

export default UrlsPrensa;
