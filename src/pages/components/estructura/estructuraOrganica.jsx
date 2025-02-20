import { useEffect, useState } from "react";
// import EstructuraApex from "./estructuraApex";

import {
  getIntendenciaData,
  getSecretarias,
} from "../../../repositories/estructuraRepositories";

const EstructuraOrganica = () => {
  const [departamentosData, setDepartamentosData] = useState(null);
  const [intendenciaData, setIntendenciaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("departamentosData :>> ", departamentosData);
  console.log("intendenciaData :>> ", intendenciaData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Indicar que estamos cargando los datos
        const [intendenciaData, secretariasData] = await Promise.all([
          getIntendenciaData(),
          getSecretarias(),
        ]);
        setDepartamentosData(secretariasData);
        setIntendenciaData(intendenciaData);
      } catch (err) {
        setError("Hubo un error al cargar los datos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  if (loading)
    return (
      <div className="min-vh-100 w-100 d-flex justify-content-center align-items-center ">
        <p>Cargando Dapartamentos...</p>
      </div>
    );
    
  if (error) return <p>{error}</p>;

  return (
    <div className="estructura-organica container">
      <h2>Intendencia</h2>
      <div className="container">
        <div className="row panels-row alineacion-center">
          {intendenciaData.data.map((item, index) => (
            <div className="col-xs-12 col-sm-6 col-md-3" key={index}>
              <a
                className="panel panel-default panel-icon"
                title={item.name}
                target="_blank"
                // href={programa.link}
              >
                <div className="panel-body ">
                  <h3>{item.name}</h3>
                  <p className="text-muted" aria-hidden="true">
                    {item.displayName}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <h2>Secretarias</h2>
      <div className="container">
        <div className="row panels-row alineacion-center">
          {departamentosData.data.map((item, index) => (
            <div className="col-xs-12 col-sm-6 col-md-3" key={index}>
              <a
                className="panel panel-default panel-icon"
                title={item.name}
                // target="_blank"
                href={
                  "/estructura/" + item.name.replace(/\s+/g, "") + "/" + item.id
                }
              >
                <div className="panel-body">
                  <h3>{item.name}</h3>
                  <p className="text-muted" aria-hidden="true">
                    {item.displayName}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* <EstructuraBtn /> */}
      {/* <EstructuraApex /> */}
    </div>
  );
};

export { EstructuraOrganica };
