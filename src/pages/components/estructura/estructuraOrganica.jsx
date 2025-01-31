import { useEffect, useState } from "react";
import EstructuraApex from "./estructuraApex";
import EstructuraBtn from "./estructuraBtn";
import {
  getIntendenciaData,
  getSecretarias,
} from "../../../repositories/estructuraRepositories";

const data = [
  {
    id: 211,
    name: "Ambientes y Espacios Publicos de la ciudad",
    parent_id: 1,
    level_id: 2,
    active: true,
    materialized_path: "1/211",
    Level: {
      name: "Secretaría",
    },
    displayName: "Secretaría Ambientes y Espacios Publicos de la ciudad",
    chief: null,
  },
  {
    id: 11,
    name: "De las Mujeres, Géneros y Diversidad",
    parent_id: 1,
    level_id: 2,
    active: true,
    materialized_path: "1/11",
    Level: {
      name: "Secretaría",
    },
    displayName: "Secretaría De las Mujeres, Géneros y Diversidad",
    chief: null,
  },
  {
    id: 10,
    name: "Educación y Cultura",
    parent_id: 1,
    level_id: 2,
    active: true,
    materialized_path: "1/10",
    Level: {
      name: "Secretaría",
    },
    displayName: "Secretaría Educación y Cultura",
    chief: {
      id: 20,
      firstname: "pablo",
      lastname: "palmende",
      phone: "1231231232",
      social_networks: {
        facebook: "https://www.facebook.com/",
        instagram: "",
        linkedin: "",
        x: "",
      },
      url_photo:
        "https://archivos-cc.sfo3.digitaloceanspaces.com/organigrama/funcionarios/1734621079172-pollo.jpg",
      bio: "Información del Funcionario Información del Funcionario",
      job_title: null,
      createdAt: "2024-12-19T15:11:20.208Z",
      updatedAt: "2024-12-19T15:11:20.208Z",
    },
  },
  {
    id: 4,
    name: "Fiscalia Municipal",
    parent_id: 1,
    level_id: 2,
    active: true,
    materialized_path: "1/4",
    Level: {
      name: "Secretaría",
    },
    displayName: "Secretaría Fiscalia Municipal",
    chief: null,
  },
  {
    id: 6,
    name: "Gabinete y Modernización",
    parent_id: 1,
    level_id: 2,
    active: true,
    materialized_path: "1/6",
    Level: {
      name: "Secretaría",
    },
    displayName: "Secretaría Gabinete y Modernización",
    chief: null,
  },
];

const intendencia = [
  {
    id: 2,
    name: "Caja de Crédito Municipal",
    parent_id: null,
    level_id: 1,
    active: true,
    materialized_path: "2",
    Level: {
      name: "Intendencia",
    },
    displayName: "Caja de Crédito Municipal",
    chief: {
      id: 19,
      firstname: "Esteban",
      lastname: "Estemendez",
      phone: "3834217703",
      social_networks: {
        facebook: "https://www.facebook.com/",
        instagram: "",
        linkedin: "",
        x: "https://www.x.com/",
      },
      url_photo:
        "https://archivos-cc.sfo3.digitaloceanspaces.com/organigrama/funcionarios/1734613582516-bttfJBG0.jpg",
      bio: "Información del FuncionarioInformación del FuncionarioInformación del Funcionario",
      job_title: null,
      createdAt: "2024-12-19T13:06:24.223Z",
      updatedAt: "2024-12-19T13:06:24.223Z",
    },
  },
  {
    id: 104,
    name: "Comunicación Territorial",
    parent_id: 1,
    level_id: 1,
    active: true,
    materialized_path: "1/6/30/104",
    Level: {
      name: "Intendencia",
    },
    displayName: "Intendencia Comunicación Territorial",
    chief: {
      id: 11,
      firstname: "marty pollo",
      lastname: "mcfly",
      phone: "3834323265",
      social_networks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.facebook.com/",
        linkedin: "",
        x: "",
      },
      url_photo:
        "https://archivos-cc.sfo3.digitaloceanspaces.com/organigrama/funcionarios/1734015094557-back-to-the-future-por-que-despidieron-marty-mcfly-original_crop1607316249683.jpg_1902800913.webp",
      bio: " <Button>Default</Button>\r\n  <Button color='blue'>Azul</Button>\r\n  <Button color='success'>Enviar</Button>\r\n  <Button color='failure'>Cancelar</Button>\r\n  <Button color='warning'>Peligro</Button>\r\n  <Button disabled>Deshabilitado</Button>",
      job_title: "Intendente",
      createdAt: "2024-12-09T14:54:31.829Z",
      updatedAt: "2024-12-12T14:51:36.201Z",
    },
  },
  {
    id: 164,
    name: "Concejo Deliberante",
    parent_id: null,
    level_id: 1,
    active: true,
    materialized_path: "164",
    Level: {
      name: "Intendencia",
    },
    displayName: "Concejo Deliberante",
    chief: null,
  },
  {
    id: 177,
    name: "Farmacoslogicos",
    parent_id: null,
    level_id: 1,
    active: true,
    materialized_path: "177",
    Level: {
      name: "Intendencia",
    },
    displayName: "Farmacoslogicos",
    chief: null,
  },
  {
    id: 1,
    name: "Intendencia",
    parent_id: null,
    level_id: 1,
    active: true,
    materialized_path: "1",
    Level: {
      name: "Intendencia",
    },
    displayName: "Intendencia",
    chief: {
      id: 18,
      firstname: "Gustavito",
      lastname: "Gusmendez",
      phone: "3834217703",
      social_networks: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        linkedin: "",
        x: "",
      },
      url_photo:
        "https://archivos-cc.sfo3.digitaloceanspaces.com/organigrama/funcionarios/1734612533813-chandler.jpg",
      bio: "Gustavito Gusmendez es  Funcionario Información del Funcionario",
      job_title: null,
      createdAt: "2024-12-19T12:48:54.902Z",
      updatedAt: "2024-12-19T12:48:54.902Z",
    },
  },
  {
    id: 3,
    name: "Juzgado de Faltas Municipal",
    parent_id: null,
    level_id: 1,
    active: true,
    materialized_path: "3",
    Level: {
      name: "Intendencia",
    },
    displayName: "Juzgado de Faltas Municipal",
    chief: null,
  },
  {
    id: 78,
    name: "Seguridad",
    parent_id: 20,
    level_id: 1,
    active: true,
    materialized_path: "1/12/20/78",
    Level: {
      name: "Intendencia",
    },
    displayName: "Intendencia Seguridad",
    chief: null,
  },
];

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
        setLoading(false); // Finaliza la carga
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="estructura-organica container">
      <h2>Intendencia</h2>
      <div className="container">
        <div className="row panels-row alineacion-center">
          {intendencia.map((item, index) => (
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
      <h2>Secreatarias</h2>
      <div className="container">
        <div className="row panels-row alineacion-center">
          {data.map((item, index) => (
            <div className="col-xs-12 col-sm-6 col-md-3" key={index}>
              <a
                className="panel panel-default panel-icon"
                title={item.name}
                target="_blank"
                // href={programa.link}
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

      <EstructuraBtn />
      <EstructuraApex />
    </div>
  );
};

export default EstructuraOrganica;
