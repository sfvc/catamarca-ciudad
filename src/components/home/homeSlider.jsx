import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { catamarcaApi } from '@api/catamarcaApi';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeSliderPage = () => {
  const [accesosRapidos, setAccesosRapidos] = useState([]);
  const [imagenes, setImagenes] = useState({});
  
  useEffect(() => {
    const fetchAccesosRapidos = async () => {
      try {
        const response = await catamarcaApi.get("/items/acceso_rapido");
        setAccesosRapidos(response.data.data);
        
        const apiUrl = catamarcaApi.defaults.baseURL || '';
        
        const nuevasImagenes = response.data.data
          .filter(item => item.imagen)
          .reduce((acc, item) => {
            acc[item.imagen] = `${apiUrl}/assets/${item.imagen}`;
            return acc;
          }, {});
          
        setImagenes(nuevasImagenes);
      } catch (error) {
        console.error("Error obteniendo accesos rápidos:", error);
      }
    };
    
    fetchAccesosRapidos();
  }, []);

  const handleLinkClick = (e, item) => {
    // If the URL exists, allow the normal behavior, do not prevent the default.
    if (item.url) {
      // No need to call preventDefault, as the target='_self' will handle it.
      window.open(item.url, '_self'); // Ensure it opens in the same window
    }
  };

  return (
    <div className="homeSlider container">
      <h2 style={{ textAlign: "center" }}>Accesos Rápidos</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,        // 1 segundo de delay entre cada slide
          disableOnInteraction: false,  // No desactivar el autoplay al interactuar
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: { slidesPerView: 1, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        className="mySwiper"
      >
        {accesosRapidos.map((item) => (
          <SwiperSlide key={item.id}>
            <a
              href={item.url || "#"}
              target="_self"
              style={{ all: "unset", cursor: "pointer" }}
              onClick={(e) => item.url && handleLinkClick(e, item)}
            >
              <div className="homeSlider-item-card">
                <div
                  className="homeSlider-item-image"
                  style={{
                    backgroundImage: `url('/images/parquejumeal.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '200px',
                  }}
                  title={item.titulo}
                >
                  <div className="homeSlider-item-overlay"></div>
                  <div className="homeSlider-item-content">
                      <img
                        src={imagenes[item.imagen] || ""}
                        alt={item.titulo}
                        className="homeSlider-item-img"
                        width={75}
                      />
                    <div className="homeSlider-item-body">
                      <div className="homeSlider-item-title">{item.titulo}</div>
                      <p className="homeSlider-item-text">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="homeSlider-item-info">
                      <img src="/images/info2.svg" alt="" width={24} />
                      <small>Obtene mas información haciendo click para ver la pagina</small>
                  </div>
                  <div>
                      <img src="" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderPage;