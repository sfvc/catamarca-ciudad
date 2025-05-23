import { useEffect, useState, useRef } from "react";
import { catamarcaApi } from "@api/catamarcaApi";
import AOS from "aos";
import "aos/dist/aos.css"; 

const ProgramasComponent = () => {
  const [programas, setProgramas] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const panelRefs = useRef([]); // Referencias a los paneles

  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const response = await catamarcaApi.get("/items/planes_programas");
        setProgramas(response.data.data);

        const apiUrl = catamarcaApi.defaults.baseURL || '';
        
        const nuevasImagenes = response.data.data
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
  }, []);

  return (
    <div className="programas container">
      <h2 className="programas__titulo">Planes y Programas</h2>
      <div className="programas__lista">
        {programas.map((items, index) => (
          <div className="programas__item" 
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
      <div className="container-fluid programas__ver-mas">
        <a href="/serviciosPlanesProgramas" className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default ProgramasComponent;
