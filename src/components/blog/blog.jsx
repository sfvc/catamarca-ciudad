const BlogPage = ({ blog }) => {
    return (
        <div className="container blog-container">
            {/* Display the single blog details */}
            <div key={blog.id} className="blog-post">
                <h1 className="blog-title">{blog.title}</h1>

                {/* Show dynamic description */}
                <p className="blog-description">{blog.description}</p>
                
                <img src='/images/Saadi-Plaza.webp' alt="Blog Post" className="blog-image" />
                
                {/* Iterating over paginaBlog inside the selected blog */}
                {blog.paginaBlog.map((pagina, idx) => (
                    <div key={idx}>
                        <h2 className="blog-content-title">{pagina.pagina.tituloPagina}</h2>
                        
                        {/* Show the articles within the page */}
                        {pagina.pagina.Articulo.map((articulo, articleIdx) => (
                                <div key={articleIdx} className="article">
                                    {articulo.img && <img className='article__blogimg' src={articulo.img} alt={articulo.title} />}
                                    <div>
                                        <h3>{articulo.title}</h3>
                                        <h4>{articulo.subtitle}</h4>
                                        <p>{articulo.description}</p>
                                    </div>
                                    <time>Articulo creado el dia 16/09/2020</time>
                                    <div>
                                        <br />
                                        <small>Mantenete informado con nuestra paginas de noticias</small>
                                    </div>
                                </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
