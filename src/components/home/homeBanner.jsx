import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTbFOxVqPgfUAr98gw3VTAvJ17EU9XSCfkfGKBYabjWAykahvh0l3gjdhnsotMd462Edi6IWfoZ-4wf2fbn9c4D3DNq8vNt0TC6sGVByH2j57Ul67Fw2UFHbeAMVS8QC_EOxyzdeMSwTg/s1600/catedral+catamarca+plaza+25+de+mayo+%25281%2529.JPG",
    titulo: "Bienvenido a la Municipalidad de Catamarca Ciudad",
  },
  {
    src: "https://inforama.com.ar/wp-content/uploads/2024/04/Catamarca-Capital-centro-clima-tiempo-plaza-25-de-mayo-catedral-4-752x423-1.jpeg",
    titulo: "Comprometidos con el desarrollo sostenible",
  },
  {
    src: "https://www.catamarcaciudad.gob.ar/wp-content/uploads/2017/08/palacioMunicipal.jpg",
    titulo: "Juntos construimos una mejor ciudad",
  },
];

const HomeBanner = () => {
  return (
    <>
      <div className="home-banner">
        <Swiper
          className="home-banner__carousel"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="home-banner__slide">
                <img
                  className="home-banner__image"
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                />
                <div className="home-banner__overlay">
                  <div className="home-banner__content">
                    <div className="home-banner__text">{item.titulo}</div>
                    <a
                      href="https://sfvc.tur.ar/"
                      className="home-banner__button"
                    >
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeBanner;
