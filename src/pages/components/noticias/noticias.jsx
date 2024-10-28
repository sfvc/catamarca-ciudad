import Header from "../home/header";
import { NoticiasAside } from "./noticiasAside";
import { NoticiasContenido } from "./noticiasContenido";

export const NoticiasContainer = () => {
    return ( 
    <>
        <Header/>
        <main class="main">
            <NoticiasContenido/>
            <NoticiasAside/>
        </main>
    </>
     );
}