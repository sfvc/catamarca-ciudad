import React from "react";

const banners = [
  {
    id: 1,
    image: "https://www.catamarcaciudad.gob.ar/wp-content/uploads/juggados.jpg",
    link: "/servicios",
  },
  {
    id: 2,
    image: "https://www.catamarcaciudad.gob.ar/wp-content/uploads/boton-web-caja-de-credito_Mesa-de-trabajo-1-copia-2.png",
    link: "/tramites",
  },
  {
    id: 3,
    image: "https://www.catamarcaciudad.gob.ar/wp-content/uploads/Boton--696x472.jpg",
    link: "/noticias",
  },
];

const HomeBannerGroup = () => (
  <>
    <section className="home-banner-group container">
      <div className="home-banner-group__titulos">
        <h1>Actualizate</h1>
        <p>Chequea los proyectos mas activos de la municipalidad</p>
      </div>
      <div className="home-banner-group__list">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link}
            className={`home-banner-group__item home-banner-group__item--${
              index + 1
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="home-banner-group__image"
            />
            <div className="home-banner-group__content">
              <a className="home-banner-group__button" href="">
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  height="36"
                  width="36"
                  data-type="color"
                  role="presentation"
                  aria-hidden="true"
                  aria-label=""
                >
                  <g>
                    <path
                      fill="#ffffff"
                      d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
                      data-color="1"
                    ></path>
                    <path
                      fill="#A0B44D"
                      d="M23.938 13v8.125a.938.938 0 0 1-1.875 0v-5.86l-8.4 8.398a.939.939 0 0 1-1.328-1.328l8.4-8.397h-5.86a.937.937 0 1 1 0-1.876H23a.94.94 0 0 1 .938.938"
                      data-color="2"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  </>
);

export default HomeBannerGroup;
