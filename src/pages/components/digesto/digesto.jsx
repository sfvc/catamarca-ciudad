import { useState } from "react";
import { DigestoContenido } from "./digestoContenido";
import { DigestoAside } from "./digestoAside";
import DisgestoMobile from "./disgestoMobile";

const DigestoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <> 

      <main className="main container">
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
      />
    </>
  );
};

export default DigestoContainer;
