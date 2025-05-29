import { useRef, useEffect, useState } from "react";
import { catamarcaApi } from "@api/catamarcaApi";
import HomeSliderPage from "./homeSlider";
import NoticiasGnral from "./noticiasGnral";
import ProgramasComponent from "./programas";
import HomeBanner from "./homeBanner";
import HomeBannerGroup from "./homeBannerGroup";
import SearchBarPortal from "./searchBarPortal";
import RedesSociales from "./redesSociales";

const Home = () => {
  const panelRef = useRef(null);
  const jumbotronRef = useRef(null);
  const [secciones, setSecciones] = useState([]);


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
        <HomeSliderPage />
        <HomeBannerGroup />
        <ProgramasComponent limit={4} />

        <section className="home-banner-group">
          <ul className="secciones-lista container">
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

        <HomeBanner />
        <RedesSociales />
        <NoticiasGnral />
      </main>
    </>
  );
};
export default Home;
