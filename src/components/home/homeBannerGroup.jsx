import { useEffect, useState } from "react";
import { catamarcaApi } from "@api/catamarcaApi";

const HomeBannerGroup = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    async function fetchBanners() {
      const response = await catamarcaApi.get("items/banners");
      setBanners(response.data.data);
    }
    fetchBanners();
  }, []);

  return (
    <section className="home-banner-group">
      <div className="home-banner-group__titulos">
        <h1>Actualizate</h1>
        <p>Chequea los proyectos mas activos de la municipalidad</p>
      </div>
      <div className="home-banner-group__list">
        {banners.map((banner, index) => (
          <a
            key={banner.id}
            href={banner.link || "#"}
            className={`home-banner-group__item home-banner-group__item--${index + 1}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${catamarcaApi.defaults.baseURL}/assets/${banner.banner}`}
              alt={`Banner ${index + 1}`}
              className="home-banner-group__image"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default HomeBannerGroup;
