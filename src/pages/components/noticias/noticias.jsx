import Header from "../common/header";
import { NoticiasAside } from "./noticiasAside";
import { NoticiasContenido } from "./noticiasContenido";

export const NoticiasContainer = () => {
    return ( 
    <>
        <main class="main">
            <NoticiasContenido/>
            <NoticiasAside/>
        </main>
    </>
     );
}