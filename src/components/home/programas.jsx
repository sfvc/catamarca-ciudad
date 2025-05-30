import { useEffect, useState, useRef } from "react";
import { catamarcaApi } from "@api/catamarcaApi";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";


const ProgramasComponent = ({ limit }) => {
  const [programas, setProgramas] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const [secciones, setSecciones] = useState([]);
  const panelRefs = useRef([]);

  useEffect(() => {
    async function fetchDatos() {
      const response = await catamarcaApi.get("items/seccion");
      setSecciones(response.data.data);
    }
    fetchDatos();
  }, []);

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await catamarcaApi.get("/items/planes_programas");
        const data = response.data.data;

        // Si hay un límite, aplicalo
        setProgramas(limit ? data.slice(0, limit) : data);

        const apiUrl = catamarcaApi.defaults.baseURL || '';
        const nuevasImagenes = data
          .filter(item => item.imagen)
          .reduce((acc, item) => {
            acc[item.imagen] = `${apiUrl}/assets/${item.imagen}`;
            return acc;
          }, {});

        setImagenes(nuevasImagenes);
      } catch (error) {
        console.error("Error obteniendo programas:", error);
      }
    };

    fetchProgramas();
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [limit]);

  return (
    <div className="programas container">
      <h2 className="programas__titulo">Planes y Programas</h2>
              <div className="secciones-slider container">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]} // ❌ sin Navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="seccionesSwiper"
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
          >
            {secciones.map((seccion) => (
              <SwiperSlide key={seccion.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      <div className="programas__lista">
        {programas.map((items, index) => (
          <div
            className="programas__item"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <a
              className="programas__link"
              title={items.titulo}
              href={items.url}
              ref={el => panelRefs.current[index] = el}
            >
              {items.imagen && imagenes[items.imagen] ? (
                <img
                  src={imagenes[items.imagen]}
                  alt={items.titulo}
                  className="programas__imagen"
                />
              ) : (
                <i className={`programas__icono atajo_faIcon__3OjA_ ${items.imagen}`} />
              )}
              <div className="programas__contenido">
                <h3 className="programas__titulo-item">{items.titulo}</h3>
                <p className="programas__descripcion" aria-hidden="true">
                  {items.descripcion}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {limit && (
        <div className="container-fluid programas__ver-mas">
          <a href="/serviciosPlanesProgramas" className="btn btn-primary">
            Ver más
          </a>
        </div>
      )}
    </div>
  );
};

export default ProgramasComponent;

