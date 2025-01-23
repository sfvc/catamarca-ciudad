import Header from "../common/header";
import { DigestoAside } from "./digestoAside";
import { DigestoContenido, } from "./digestoContenido";

export const DigestoContainer = () => {
    return ( 
    <>
        <div className="digestobtn main container">
            <button>Boletines Municipales</button>
            <button>Ordenanzas</button>
            <button>Resoluciones</button>
            <button>Decretos Municipales</button>
        </div>
        <main class="main container">
            <DigestoContenido/>
            <DigestoAside/>
        </main>
    </>
     );
}