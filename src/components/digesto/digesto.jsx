import { useState } from "react";
import { DigestoContenido } from "./digestoContenido";
import { DigestoAside } from "./digestoAside";
import DisgestoMobile from "./disgestoMobile";
import Cargando from "@components/common/Cargando";

const DigestoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <>

      {/* <main className="main container">
        <DigestoContenido />
        <DigestoAside />
      </main>

      <button
        className="disgesto-btn__btnmobile"
        onClick={() => {
          console.log("Opening modal...");
          setIsModalOpen(true);
        }}
      >
        <img src="/images/digesto.svg" alt="Open modal" />
      </button>

      <DisgestoMobile
        isOpen={isModalOpen}
        onClose={() => {
          console.log("Closing modal...");
          setIsModalOpen(false);
        }}
      /> */}
      {!isIframeLoaded && (
        <div className="iframe-loading" style={{ textAlign: "center", padding: "2rem" }}>
          <Cargando />
        </div>
      )}

      <div className="iframediv container" style={{ display: isIframeLoaded ? 'block' : 'none' }}>
        <iframe
          src="https://www.catamarcaciudad.gob.ar/digesto/digestoMunicipal-PruebaResol.php"
          width="100%"
          height="1000"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIsIframeLoaded(true)}
        ></iframe>
      </div>
    </>
  );
};

export default DigestoContainer;
