import React from 'react';
import digestoContenido from '../../data/digestoContenido.json'; // Adjust the path as necessary

export const DigestoContenido = () => {
    return ( 
        <section className="noticias">
            {digestoContenido.articles.map((article, index) => (
                <article className="noticias__item" key={index}>
                    <div className="noticias__itemcontainer">
                        <section className="noticias__itemcontainersection">
                            <h2 className="noticias__title">{article.title}</h2>
                            <small>Creado el dia 27/10/2024 a las 10:00</small>
                            <h5>Proposito del Decreto:</h5>
                            <p className="noticias__excerpt">{article.excerpt}</p>
                        </section>
                        <div className="noticias__itemcontainera">
                            <small>Descarga el Decreto haciendo click en el Icono de Descarga</small>
                            <a className="" href='/blog/1'>
                                <img className="noticias__itemcontaineraimg" src="/images/pdf.svg" alt="Descargar Decreto"/>
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
