import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { catamarcaApi } from '../../../api/catamarcaApi';
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
    if (item.url) {
      e.preventDefault();
      window.open(item.url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="homeSlider container">
      <h2 style={{ textAlign: "center" }}>Accesos Rápidos</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        className="mySwiper"
      >
        {accesosRapidos.map((item) => (
          <SwiperSlide key={item.id}>
            <a
              href={item.url || "#"}
              style={{ all: 'unset' }}
              onClick={(e) => item.url && handleLinkClick(e, item)}
            >
              <div className="TramistedGrid__card">
                {item.imagen ? (
                  imagenes[item.imagen] ? (
                    <img
                      style={{ width: "100%", height: "150px", objectFit: "cover" }}
                      src={imagenes[item.imagen]}
                      alt={item.titulo}
                    />
                  ) : (
                    <div>Cargando imagen...</div>
                  )
                ) : (
                  <div>No hay imagen</div>
                )}
                <h3 className="TramistedGrid__card-title">{item.titulo}</h3>
                <small className="TramistedGrid__card-small">{item.descripcion}</small>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderPage;