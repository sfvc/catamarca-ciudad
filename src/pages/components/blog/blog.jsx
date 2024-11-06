import React from 'react';

const BlogPage = ({ blog }) => {
    return (
        <div className="container blog-container">
            {/* Display the single blog details */}
            <div key={blog.id} className="blog-post">
                <h1 className="blog-title">{blog.title}</h1>
                <p className="blog-description">{blog.description}</p>
                <img src='../src/pages/images/Saadi-Plaza.webp' alt="Blog Post" className="blog-image" />
                
                {/* Iterating over paginaBlog inside the selected blog */}
                {blog.paginaBlog.map((pagina, idx) => (
                    <div key={idx}>
                        <h2 className="blog-content-title">{pagina.pagina.tituloPagina}</h2>
                        
                        {/* Show the articles within the page */}
                        {pagina.pagina.Articulo.map((articulo, articleIdx) => (
                            <div key={articleIdx} className="article">
                                <h3>{articulo.title}</h3>
                                {articulo.img && <img src={articulo.img} alt={articulo.title} />}
                                <p>{articulo.seccion}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
