import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    src: "https://static.wixstatic.com/media/a28145_4f60f10a07f64548b60accdcb730bf67~mv2.png/v1/fill/w_1905,h_636,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/a28145_4f60f10a07f64548b60accdcb730bf67~mv2.png",
    text: "Bienvenido a la Municipalidad de Catamarca Ciudad",
    btn: "Más Información",
  },
  {
    src: "https://static.wixstatic.com/media/a28145_95d82c2da04f4dee83926034a4fbe252~mv2.jpg/v1/fill/w_1905,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a28145_95d82c2da04f4dee83926034a4fbe252~mv2.jpg",
    text: "Comprometidos con el desarrollo sostenible",
    btn: "Más qwe",
  },
  {
    src: "https://static.wixstatic.com/media/a28145_9525b734c482418696ecfde0943fa549~mv2.jpg/v1/fill/w_1905,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a28145_9525b734c482418696ecfde0943fa549~mv2.jpg",
    text: "Juntos construimos una mejor ciudad",
    btn: "wqeewqe Información",
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
                    <div className="home-banner__text">{item.text}</div>
                    <a
                      href="https://sfvc.tur.ar/"
                      className="home-banner__button"
                    >
                      {item.btn}
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
