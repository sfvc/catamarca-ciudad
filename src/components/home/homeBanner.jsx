import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { catamarcaApi } from "@api/catamarcaApi"; // Asegurate de tener configurado el baseURL aquí

import "swiper/css";
import "swiper/css/pagination";

const HomeBanner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      const response = await catamarcaApi.get("/items/turismo");
      setBanners(response.data.data);
    }
    fetchBanners();
  }, []);

  return (
    <div className="home-banner">
      <Swiper
        className="home-banner__carousel"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="home-banner__slide">
              <img
                className="home-banner__image"
                src={`${catamarcaApi.defaults.baseURL}/assets/${item.imagen}`}
                alt={item.titulo}
              />
              <div className="home-banner__overlay">
                <div className="home-banner__content">
                  <div className="home-banner__text">{item.titulo}</div>
                  <a
                    href="https://sfvc.tur.ar/"
                    target="_blank"
                    className="home-banner__button"
                  >
                    Más Información
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
