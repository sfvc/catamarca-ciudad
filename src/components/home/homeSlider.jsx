import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { catamarcaApi } from '@api/catamarcaApi';
import 'swiper/css';
import 'swiper/css/pagination';

const HomeSliderPage = () => {
  const [accesosRapidos, setAccesosRapidos] = useState([]);
  const [imagenes, setImagenes] = useState({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Detecta el cambio de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trae los datos de la API
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

  // Agrupa los elementos según el tamaño de la pantalla
  const agruparEnGrupos = (arr, tamanoGrupo) => {
    const grupos = [];
    for (let i = 0; i < arr.length; i += tamanoGrupo) {
      grupos.push(arr.slice(i, i + tamanoGrupo));
    }
    return grupos;
  };

  const handleLinkClick = (e, item) => {
    if (item.url) {
      window.open(item.url, '_self');
    }
  };

  const tamanoGrupo = windowWidth < 768 ? 1 : 3;
  const grupos = agruparEnGrupos(accesosRapidos, tamanoGrupo);

  return (
    <div className="homeSlider container">
      <h2 style={{ textAlign: "center" }}>Destacados</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {grupos.map((grupo, index) => (
          <SwiperSlide key={index}>
            <div
              className="homeSlider-group"
              style={{
                display: 'flex',
                gap: '20px',
                flexDirection: windowWidth < 768 ? 'column' : 'row'
              }}
            >
              {grupo.map((item) => (
                <a
                  key={item.id}
                  href={item.url || "#"}
                  target="_self"
                  style={{ all: "unset", cursor: "pointer", flex: 1 }}
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
                  </div>
                </a>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderPage;
