import React from 'react';
import digestoContenido from '../../data/digestoContenido.json'; // Adjust the path as necessary

export const DigestoContenido = () => {
    return ( 
        <section className="noticias">
            {digestoContenido.articles.map((article, index) => (
                <article className="noticias__item" key={index}>
                    <div className="noticias__itemcontainer">
                        <section className="noticias__itemcontainersection">
                            <small>Creado el dia 27/10/2024 a las 10:00</small>
                            <h2 className="noticias__title">{article.title}</h2>
                            <h5>Proposito del Decreto:</h5>
                            <p className="noticias__excerpt">{article.excerpt}</p>
                            <small>Descarga el Decreto haciendo click en el Icono de Descarga</small>
                        </section>
                        <div className="noticias__itemcontainera">
                            <a className="noticias__itemcontainera" href='/blog/1'>
                                <img className="noticias__itemcontaineraimg" src="/images/pdf.svg" alt="Descargar Decreto"/>
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
