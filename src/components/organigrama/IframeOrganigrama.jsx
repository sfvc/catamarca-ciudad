// src/components/IframeConCargando.jsx
import { useState } from "react";
import Cargando from "@components/common/Cargando";

const IframeOrganigrama = ({ url }) => {
  const [cargando, setCargando] = useState(true);

  return (
    <div>
      {cargando && <Cargando />}
      <div style={{ display: cargando ? "none" : "block" }}>
        <iframe
          className="organigrama-iframe"
          src={url}
          width="100%"
          height="900"
          frameBorder="0"
          onLoad={() => setCargando(false)}
        ></iframe>
      </div>
    </div>
  );
};

export default IframeOrganigrama;
