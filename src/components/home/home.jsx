import { useRef, useEffect, useState } from "react";
import { catamarcaApi } from "@api/catamarcaApi";
import HomeSliderPage from "./homeSlider";
import NoticiasGnral from "./noticiasGnral";
import ProgramasComponent from "./programas";
import HomeBanner from "./homeBanner";
import HomeBannerGroup from "./homeBannerGroup";
import SearchBarPortal from "./searchBarPortal";

const Home = () => {
  const panelRef = useRef(null);
  const jumbotronRef = useRef(null);
  const [secciones, setSecciones] = useState([]);
  const facebook = "https://www.facebook.com/catamarcatucapital";
  const instagram = "https://www.instagram.com/catamarcacapital";
  const tiktok = "https://www.tiktok.com/@municatamarca";
  const tiktokUsername = tiktok?.split("/@")[1] ?? "";

  useEffect(() => {
    const igScript = document.createElement("script");
    igScript.setAttribute("src", "//www.instagram.com/embed.js");
    igScript.async = true;
    document.body.appendChild(igScript);

    const tkScript = document.createElement("script");
    tkScript.setAttribute("src", "https://www.tiktok.com/embed.js");
    tkScript.async = true;
    document.body.appendChild(tkScript);
  }, []);

  useEffect(() => {
    async function fetchDatos() {
      const response = await catamarcaApi.get("items/seccion");
      setSecciones(response.data.data);
    }
    fetchDatos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".panel",
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power2.out",
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (panelRef.current) observer.observe(panelRef.current);
    return () => {
      if (panelRef.current) observer.unobserve(panelRef.current);
    };
  }, []);

  return (
    <>
      <main ref={panelRef}>
        <SearchBarPortal jumbotronRef={jumbotronRef} />

        <section className="home-banner-group">
          <ul className="secciones-lista">
            {secciones.map((seccion) => (
              <li key={seccion.id} className="seccion-item">
                <a href={`/landing?id=${seccion.id}`} className="seccion-enlace">
                  <div className="seccion-icono">
                    <img
                      src={`${catamarcaApi.defaults.baseURL}/assets/${seccion.icono}`}
                      alt={seccion.nombre}
                      className="seccion-imagen"
                    />
                  </div>
                  <span className="seccion-nombre">{seccion.nombre}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <HomeSliderPage />
        <HomeBannerGroup />
        <ProgramasComponent />
        <HomeBanner />

        <section className="redes-sociales-section" id="redes-sociales">
          <div className="redes-sociales-container">
            <h2 className="redes-sociales-title">Redes Sociales</h2>

            <div className="redes-sociales-grid">
              {/* Facebook */}
              <div className="redes-sociales-card">
                <iframe
                  src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                    facebook
                  )}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                  width="100%"
                  height="550"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              {/* Instagram */}
              <div className="redes-sociales-card">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={instagram}
                  data-instgrm-version="14"
                  style={{ width: "100%", minHeight: "550px", margin: "0 auto" }}
                />
              </div>

              {/* TikTok */}
              <div className="redes-sociales-card">
                <blockquote
                  className="tiktok-embed"
                  cite={tiktok}
                  data-unique-id={tiktokUsername}
                  data-embed-type="creator"
                  style={{ maxWidth: "100%", minHeight: "550px" }}
                >
                  <section>
                    <a target="_blank" href={tiktok}>
                      @{tiktokUsername}
                    </a>{" "}
                    en TikTok
                  </section>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <NoticiasGnral />
      </main>
    </>
  );
};
export default Home;
