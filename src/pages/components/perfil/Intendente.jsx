import React from "react";

const PerfilIntendente = () => {

  return (
    <main role="main" className="PerfilIntendente container">
        <div className="PerfilIntendente__contenedor">
            <div className="PerfilIntendente__contenedor-imagen">
                <img src="/images/gustavo.jpg" alt="" className="PerfilIntendente__imagen"/>
                <div className="PerfilIntendente__informacion">
                    <h1 className="PerfilIntendente__nombre">Gustavo Saadi</h1>
                    <h2 className="PerfilIntendente__cargo">
                        Intendente
                    </h2>
                    <q>Por una Catamarca mas Unida</q>
                    <br />
                    <time className="PerfilIntendente__periodo" datetime="">Periodo 2024 - 2028</time>
                </div>
            </div>
            <div className="PerfilIntendente__redes">
                <h3 className="PerfilIntendente__titulo-redes">Redes Sociales</h3>
                <div className="PerfilIntendente__contenedor-botones">
                    <a href="" className="PerfilIntendente__boton-redes">
                        <img src="/images/iconos-btn/instagram3.svg" alt="" />
                    </a>
                    <a href="" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/facebook3.svg" alt="" /></a>
                    <a href="" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/tiktok3.svg" alt="" /></a>
                    <a href="" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/twitter3.svg" alt="" /></a>
                    <a href="" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/wsp3.svg" alt="" /></a>
                    <a href="" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/youtube3.svg" alt="" /></a>
                </div>
            </div>
        </div>
        <div className="PerfilIntendente__descripcion">
            <h3 className="PerfilIntendente__titulo-nacimiento">Nacimiento y Profesión</h3>
            <p className="PerfilIntendente__descripcion-nacimiento">Soy Gustavo Saadi, nací en mi amada Catamarca el 2 de agosto de 1975, soy abogado de profesión y político por vocación.</p>
            <h3 className="PerfilIntendente__titulo-nacimiento">Carrera Politica</h3>
            <p className="PerfilIntendente__descripcion-nacimiento">Milité políticamente desde muy joven, siempre dentro del Partido Justicialista, y tuve el honor de cumplir diferentes responsabilidades en la función pública.</p>           
            <p>
                Fui diputado provincial, secretario de Gobierno de la Capital, Asesor General de Gobierno de la Provincia de Catamarca y ministro de Gobierno y Justicia.
            </p>
            <p>
                En 2017 fui electo diputado nacional y, dos años más tarde, intendente de la ciudad de San Fernando del Valle de Catamarca, Capital provincial. Creo en la igualdad de oportunidades, en la justicia social, en el respeto y el amor al prójimo, y creo sobre todo que la política sólo sirve cuando se la utiliza para trabajar para el bienestar del pueblo.
            </p>
        </div>
    </main>
  );
};

export default PerfilIntendente;
