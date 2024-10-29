import React from 'react';
import noticiasData from './noticiasContenido.json'; // Adjust the path as necessary

export const NoticiasContenido = () => {
    return ( 
        <section className="noticias">
            {noticiasData.articles.map((article, index) => (
                <article className="noticias__item" key={index}>
                    <div className="noticias__imagegrid">
                        <img className="noticias__image noticias__image--large" src={article.images[0]} alt={article.title} />
                        {article.images.slice(1).map((image, imgIndex) => (
                            <img className="noticias__image" src={image} alt={article.title} key={imgIndex} />
                        ))}
                    </div>
                    <div className="noticias__itemcontainer">
                        <section className="noticias__itemcontainersection">
                            <h2 className="noticias__title">{article.title}</h2>
                            <p className="noticias__excerpt">{article.excerpt}</p>
                        </section>
                        <div className="noticias__itemcontainera">
                            <a className="noticias__itemcontainera">
                                <img className="noticias__itemcontaineraimg" src="./src/pages/images/eye.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}
