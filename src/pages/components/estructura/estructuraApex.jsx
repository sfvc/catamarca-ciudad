import { useEffect, useState } from "react";
import { getTreeData } from "../../../repositories/estructuraRepositories";
import { ApexTreeCanva } from "./ApexTreeCanva";

const EstructuraApex = ({ name, id }) => {
  const [departamentosData, setDepartamentosData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("departamentosData :>> ", departamentosData);

  function addIdToData(node) {
    // Agregar el id al objeto data
    node.data.id = node.id;
    // Recorrer los hijos recursivamente
    if (node.children && node.children.length > 0) {
      node.children = node.children.map(addIdToData);
    }

    return node;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Indicar que estamos cargando los datos
        const secretariasData = await getTreeData({ deptamentoId: id });
        setDepartamentosData(addIdToData(secretariasData));
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

  return (
    <ApexTreeCanva renderTreeData={departamentosData} />
    // <div>
    //   <h1>EstructuraApex</h1>
    //   <p>
    //     {name} - {id}
    //   </p>
    // </div>
  );
};

export { EstructuraApex };
