import { useEffect } from "react";
import ModalMobile from "../common/modalMobile";

const DisgestoMobile = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ensure modal only renders when needed

  return (
    <ModalMobile isOpen={isOpen} onClose={onClose}>
            <div className="aside__div displaymobile">
              <div className="aside__div2">
                  <h3 className="aside__title">Decretos</h3>
                  <div className="aside__input-container">
                      <input
                          className="aside__input"
                          type="text"
                          placeholder="Nro.Decreto"
                      />
                      <input
                          className="aside__input"
                          type="text"
                          placeholder="Año"
                      />
                      <input
                          className="aside__input"
                          type="text"
                          placeholder="Extracto"
                      />
                      <input
                          className="aside__input"
                          type="text"
                          placeholder="Modificado/Complementado por"
                      />
                      <input
                          className="aside__input"
                          type="text"
                          placeholder="Derogado por"
                      />
                  </div>
              </div>
              <div className="digestobtn main container">
                <button>Boletines Municipales</button>
                <button>Ordenanzas</button>
                <button>Resoluciones</button>
                <button>Decretos Municipales</button>
              </div>
              <div className="aside__div1">
                  <button>
                      Buscar
                  </button>
                  <button>
                      Limpiar
                  </button>
              </div>
              </div>
    </ModalMobile>
  );
};

export default DisgestoMobile;
