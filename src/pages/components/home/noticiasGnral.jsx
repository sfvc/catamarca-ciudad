import React, { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi"; // Ensure the import path is correct

const NoticiasGnral = () => {
  const [noticias, setNoticias] = useState([]);
  const [imagenes, setImagenes] = useState({});

  // useEffect(() => {
  //   const fetchNoticias = async () => {
  //     try {
  //       // Fetching data from the API
  //       const response = await catamarcaApi.get('/items/noticias', {
  //         params: {
  //           filter: {
  //             destacado: { _eq: true }, // Filter for 'destacado' field being true
  //           },
  //           limit: 3, // Limit to 3 latest items
  //         },
  //       });

  //       console.log(response); // This helps in debugging the response

  //       // Assuming the response data structure is { data: [...] }
  //       setNoticias(response.data.data); // Directus usually has a 'data' field containing the actual results
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching news:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchNoticias();
  // }, []);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await catamarcaApi.get("/items/noticias");
        const noticiasDestacadas = response.data.data.filter(
          (noticia) => noticia.destacado
        );
        const noticiasOrdenadas = noticiasDestacadas.sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        const noticiasLimitadas = noticiasOrdenadas.slice(0, 3);
        setNoticias(noticiasLimitadas);

        const apiUrl = catamarcaApi.defaults.baseURL || "";

        const nuevasImagenes = response.data.data
          .filter((item) => item.imagen)
          .reduce((acc, item) => {
            acc[item.imagen] = `${apiUrl}/assets/${item.imagen}`;
            return acc;
          }, {});

        setImagenes(nuevasImagenes);
      } catch (error) {
        console.error("Error obteniendo noticias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="container noticias-gnral">
      <div className="panel-pane pane-titulo col-md-12 m-l-m15">
        <div className="pane-content">
          <h2 className="activities-sidbar" style={{ textAlign: "center" }}>
            Noticias Destacadas
          </h2>
        </div>
      </div>

      <div className="parent" style={{position: "relative"}}>
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => {
            return (
              <a
                key={noticia.id} // Use the actual 'id' for the key and link
                href={`/news/${noticia.id}`} // Assuming each news item has a unique 'id'
                className={`div${index + 1} grid-item`}
              >
                <div className="overlay">
                  <img
                    src={imagenes[noticia.imagen]}
                    alt={noticia.titulo}
                    style={{
                      position: "absolute", // Positioning to overlay as background
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Make sure the image covers the area
                      zIndex: -1, // Ensure the image stays behind the content
                    }}
                    />

                  <div className="home-page__news-title-div">
                    <h3 className="home-page__news-title">{noticia.titulo}</h3>
                    {/* <p className="home-page__news-description">
                      {noticia.descripcion || "No description available"}{" "}
                      </p> */}
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <p>No noticias available.</p>
        )}
      </div>

      <a style={{padding:'6px 12px', backgroundColor:'#001529', color:'white', width:'150px', textAlign:'center', borderRadius:'8px', cursor:'pointer'}}>Ver más</a>
    </div>
  );
};

export default NoticiasGnral;
