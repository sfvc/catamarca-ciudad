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
  }, []);

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
  
    // Initialize AOS after data is fetched
    AOS.init({ duration: 1000, once: true });
  
    // Optionally, you can use AOS.refresh() if you are dynamically updating the content
    AOS.refresh();
  }, []); // Empty dependency array to run only once on mount



  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Planes y Programas</h2>
      <div className="row panels-row alineacion-center">
        {programas.map((items, index) => (
          <div className="col-xs-12 col-sm-6 col-md-3" key={index}>
            <a
              className="panel panel-default panel-icon"
              title={items.titulo}
              href={items.url}
              ref={el => panelRefs.current[index] = el} // Assign reference
              data-aos="fade-up" // Add AOS fade-up animation
              data-aos-delay={`${index * 100}`} // Optional delay for staggered animation
            >
              {items.imagen && imagenes[items.imagen] ? (
                <img 
                  src={imagenes[items.imagen]} 
                  alt={items.titulo} 
                  className="panel-icon-image"
                  style={{ width: "100%", height: 'auto', padding: '3rem' }}
                />
              ) : (
                <i className={`atajo_faIcon__3OjA_ ${items.imagen}`} />
              )}
              <div className="panel-body text-center">
                <h3>{items.titulo}</h3>
                <p className="text-muted" aria-hidden="true">
                  {items.descripcion}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ProgramasComponent;
