// Home.jsx
import { useRef, useEffect } from "react";
import HomeSliderPage from "./homeSlider";
import NoticiasGnral from "./noticiasGnral";
import { PortalARG } from "./portalarg";
import ProgramasComponent from "./programas";
import HomeBanner from "./homeBanner";
import HomeBannerGroup from "./homeBannerGroup";
import SearchBarPortal from "./searchBarPortal";

const Home = () => {
  const panelRef = useRef(null);
  const jumbotronRef = useRef(null); // <- se lo pasás a ambos

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
        <section className="bg-gray section-sm">
          <div className="">
            <div className="panel-pane pane-atajos">
              <div className="pane-content">
                <ul className="nav nav-icons nav-icons-selected">
                  <li className="">
                    <a href="/aaip/datospersonales">
                      <i className="icono-arg-dni bg-primary"></i>
                      <span>Protección de datos personales</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/aaip/tramites">
                      <i className="icono-arg-tramite bg-fucsia"></i>
                      <span>Trámites y servicios</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/aaip/buscador-normativa">
                      <i className="fa fa-legal bg-warning"></i>
                      <span>Normativa</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/aaip/consejo-federal-transparencia">
                      <i className="icono-arg-mapa-argentina bg-uva"></i>
                      <span>Consejo Federal para la Transparencia</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <HomeSliderPage />
        <HomeBannerGroup />
        <ProgramasComponent />
        <HomeBanner />
        <NoticiasGnral />
      </main>
    </>
  );
};
export default Home;
