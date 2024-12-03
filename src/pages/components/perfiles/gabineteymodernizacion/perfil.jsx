import React from "react";
import JumbotronPerfil from "./jumbotronPerfil";
import SeccionPerfil from "./seccionPerfil";
import NewsListPerfil from "./newsListPerfil";
import Miembros from "./miembros";

const PerfilPage = ({ perfiles }) => {
  // Destructure the necessary parts from the `perfiles` prop
  const { imagenDeFondo, nombre, descripcion, secciones } = perfiles;

  return (
    <main role="main">
      <JumbotronPerfil
        imagenDeFondo={imagenDeFondo}
        nombre={nombre}
        descripcion={descripcion}
      />

      <Miembros perfiles={perfiles} />


      <div className="m-t-2">
        {secciones?.map((seccion, index) => (
          <SeccionPerfil
            key={index}
            titulo={seccion.primerTitulo}
            contenido={seccion.contenido}
            cita={seccion.cita}
          />
        ))}
      </div>

      {/* News List Section */}
      {secciones?.some((seccion) => seccion.noticias) && (
        <section>
          <NewsListPerfil
            titulo="Noticias Destacadas"
            noticias={secciones.flatMap((seccion) => seccion.noticias || [])}
          />
        </section>
      )}
    </main>
  );
};

export default PerfilPage;
