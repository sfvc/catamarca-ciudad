import NewsPanelPerfil from "./newsPanelPerfil";

const NewsListPerfil = ({ noticias, sectionTitle, titulo }) => {
  return (
    <div className="container">
        <h2>Noticias Destacadas</h2>
        <article className="container">
        <div className="row">
            <div className="col-md-12">
            <h2 className="h3 section-title">{sectionTitle}</h2>
            </div>
        </div>

        <div className="row panels-row">
            {noticias.map((noticia, index) => (
            <NewsPanelPerfil key={index} noticia={noticia} />
            ))}
        </div>

        <div className="row">
            <div className="col-xs-12">
            <a className="btn btn-primary">Ver todas las noticias</a>
            </div>
        </div>
        </article>
    </div>
  );
};

export default NewsListPerfil;
