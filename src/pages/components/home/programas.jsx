import { useEffect, useState } from "react";
import { catamarcaApi } from "../../../api/catamarcaApi";

const ProgramasComponent = () => {
  const [programas, setProgramas] = useState([]);
  const [imagenes, setImagenes] = useState({});

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

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Planes y Programas</h2>
      <div className="row panels-row alineacion-center">
        {programas.map((items, index) => (
          <div className="col-xs-12 col-sm-6 col-md-3" key={index}>
            <a
              className="panel panel-default panel-icon"
              title={items.titulo}
              target="_blank"
              href={items.url}
            >
              <div className={`panel-heading`}>
                {items.imagen && imagenes[items.imagen] ? (
                  <img 
                    src={imagenes[items.imagen]} 
                    alt={items.titulo} 
                    className="panel-icon-image"
                  />
                ) : (
                  <i className={`atajo_faIcon__3OjA_ ${items.imagen}`} />
                )}
              </div>
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
