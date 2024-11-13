import Header from "../common/header";
import { DigestoAside } from "./digestoAside";
import { DigestoContenido, } from "./digestoContenido";

export const DigestoContainer = () => {
    return ( 
    <>
        <main class="main container">
            <DigestoContenido/>
            <DigestoAside/>
        </main>
    </>
     );
}