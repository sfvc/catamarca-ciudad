import { useEffect, useState } from "react";
import SaludMunicipal from "./salud-municipal";
import PostasSanitarias from "./postas-sanitarias";
import Kinesiologia from "./kinesiologia";
import DiagnosticoImagen from "./diagnostico-imagen";

import AOS from "aos";
import "aos/dist/aos.css";

export default function InfoSalud() {
  const [seccionActiva, setSeccionActiva] = useState("salud");

  const renderSeccion = () => {
    switch (seccionActiva) {
      case "salud":
        return <SaludMunicipal />
      case "postas":
        return <PostasSanitarias />
      case "diagnostico":
        return <DiagnosticoImagen />
      case "kinesiologia":
        return <Kinesiologia />
      default:
        return null
    }
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section data-aos="fade-up" style={{ paddingTop: 0 }}>
      <div className="bg-gray" style={{ paddingTop: '20px'}}>
        <ul className="nav nav-icons nav-icons-selected">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setSeccionActiva("salud"); }}>
              {/* <i className={`icono-arg-anticorrupcion ${ seccionActiva === "salud" ? "active" : "" }`}></i> */}
              <i className="icono-arg-anticorrupcion"></i>
              <span>Salud Municipal</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setSeccionActiva("postas"); }}>
              <i className="icono-arg-dni"></i>
              <span>Postas Sanitarias</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setSeccionActiva("kinesiologia"); }}>
              <i className="fa fa-legal"></i>
              <span>Kinesiología</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setSeccionActiva("diagnostico"); }}>
              <i className="icono-arg-tramite"></i>
              <span>Diagnósticos por Imagen</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="secciones mt-4">
        {renderSeccion()}
      </div>
    </section>
  );
}