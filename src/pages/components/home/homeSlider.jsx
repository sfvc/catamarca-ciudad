import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import the Autoplay module
import 'swiper/css';  
import 'swiper/css/pagination';  // Import pagination styles
import { HomePageGrid } from '../../data/portal.json';

// Assuming HomePageGrid is passed as a prop or imported
const HomeSliderPage = () => {
  const handleLinkClick = (e, card) => {
    // Check if the link is external
    if (card.external) {
      // Prevent default behavior
      e.preventDefault();
      // Open the link in a new tab programmatically
      window.open(card.link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="homeSlider container">
      <h2 style={{ textAlign: "center" }}>Accesos Rápidos</h2>
      {/* Swiper component for cards */}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        pagination={{
          clickable: true, // Enables clickable pagination
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module here
        autoplay={{
          delay: 1000, // Set autoplay to change slide every 1.5 seconds
          disableOnInteraction: false, // Continue autoplay even if user interacts
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log('Slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {HomePageGrid.map((card, index) => (
          <SwiperSlide key={index}>
            <a 
              href={card.link} 
              style={{ all: 'unset' }} 
              onClick={(e) => handleLinkClick(e, card)}
            >
              <div className="TramistedGrid__card">
                <img 
                  className="TramistedGrid__cardimg padding-15" 
                  src={card.image} 
                  alt={card.title} 
                />
                <h3 className="TramistedGrid__card-title">{card.title}</h3>
                <small className="TramistedGrid__card-small">{card.description}</small>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSliderPage;
