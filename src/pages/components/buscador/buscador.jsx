import React, { useState } from 'react';

const BuscadorComponent = () => { // Removed "export default const"
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const items = [
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5',
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5',
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5',
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5',
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5',
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5',
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5'
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filteredItems = items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
        setResults(filteredItems);
    };

    const noticias = Array.from({length:'16'}, (_, index) => ({
        titulo:`titulo ${index + 1}`,
        small: `subtitulo/fecha ${index + 1}`,
        descripcion: `texto de descripcion ${index + 1}`
    }))

    return (
        <div className="search-container container">
            <h1>Buscar Resultados - hola</h1>
            <div className="search-container-div">
                <input
                    type="text"
                    className="search-container__input"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                />
                <input type="date" style={{padding:"10px"}}/>
            </div>
            <a style={{all:'unset', cursor:'pointer'}} href="/blog/1">
                { noticias.map((noticia, index) =>(
                    <article className="search-container___resultados-article">
                        <div className="search-container___resultados-div">
                            <img className="search-container___resultados-img" src="./src/pages/images/parquejumeal.webp" alt="" />
                        </div>
                        <div className='search-container___resultados-div-article'>
                            <h4>{noticia.titulo}</h4>
                            <time datetime="2017-02-14">{noticia.small}</time>
                            <p className="search-container___resultados-p">
                                {noticia.descripcion}
                            </p>
                        </div>
                        <span className="search-container___resultados-a">
                            <img className="search-container___resultados-a-img" src="./src/pages/images/eye.svg" alt="" />
                        </span>
                    </article>
                ))}
            </a>
            {results.length > 0 && (
                <ul className="search-container__results container">
                    {results.map((item, index) => (
                        <li key={index} className="search-container__result-item">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BuscadorComponent; // Correctly export the component here
