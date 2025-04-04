import { useState } from "react";
import { DigestoContenido } from "./digestoContenido";
import { DigestoAside } from "./digestoAside";
import DisgestoMobile from "./disgestoMobile";

const DigestoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <div className="iframediv container">
        <iframe src="https://www.catamarcaciudad.gob.ar/digesto/digestoMunicipal-PruebaResol.php" width="100%" height="1000" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
    </>
  );
};

export default DigestoContainer;
