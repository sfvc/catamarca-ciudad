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
                    <time className="PerfilIntendente__periodo" datetime="">Periodo 2023 - actualidad</time>
                </div>
            </div>
            <div className="PerfilIntendente__redes">
                <h3 className="PerfilIntendente__titulo-redes">Redes Sociales</h3>
                <div className="PerfilIntendente__contenedor-botones">
                    <a href="https://www.instagram.com/gustavo_saadi/?hl=es" className="PerfilIntendente__boton-redes">
                        <img src="/images/iconos-btn/instagram3.svg" alt="" />
                    </a>
                    <a href="https://www.facebook.com/saadi.gustavo/?locale=es_LA" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/facebook3.svg" alt="" /></a>
                    <a href="https://www.tiktok.com/@gustavosaadi" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/tiktok3.svg" alt="" /></a>
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2FGustavoSaadi" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/twitter3.svg" alt="" /></a>
                    <a href="https://www.youtube.com/@gustavosaadi9172/videos" className="PerfilIntendente__boton-redes"><img src="/images/iconos-btn/youtube3.svg" alt="" /></a>
                </div>
            </div>
        </div>
        <section className="PerfilIntendente__descripcion">
        <h3 className="PerfilIntendente__titulo-nacimiento">Nacimiento y profesión</h3>
        <p className="PerfilIntendente__descripcion-nacimiento">
          Soy Gustavo Saadi. Nací en mi querida Catamarca el 2 de agosto de 1975. 
          Soy abogado de profesión y político por vocación.
        </p>

        <h3 className="PerfilIntendente__titulo-nacimiento">Carrera política</h3>
        <p className="PerfilIntendente__descripcion-nacimiento">
          Inicié mi militancia desde muy joven en el Partido Justicialista, asumiendo con orgullo 
          diversas responsabilidades en la función pública.
        </p>

        <p>
          Me desempeñé como diputado provincial, secretario de Gobierno de la Capital, 
          Asesor General de Gobierno de la Provincia y ministro de Gobierno y Justicia.
        </p>

        <p>
          En 2017 fui electo diputado nacional y, en 2019, intendente de San Fernando del Valle 
          de Catamarca. Creo profundamente en la igualdad de oportunidades, la justicia social, 
          el respeto, el amor al prójimo y que la política sólo tiene sentido cuando se utiliza 
          para mejorar la vida del pueblo.
        </p>
      </section>
    </main>
  );
};

export default PerfilIntendente;
