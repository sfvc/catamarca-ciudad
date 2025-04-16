
import BannerComponent from './banners';
import FaqCard from './faq';
import HomeSliderPage from './homeSlider';
import MapComponent from './map';
import NoticiasGnral from './noticiasGnral';
import { PortalARG } from './portalarg';
import ProgramasComponent from './programas';
import { useRef, useEffect } from 'react';

const Home = () => {
    const panelRef = useRef(null); // Reference to the container of panels

    useEffect(() => {
      // Set up IntersectionObserver
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Trigger the GSAP animation when the component is in the viewport
            gsap.fromTo(
              ".panel",
              {
                opacity: 0,
                y: 50,
              },
              {
                opacity: 1,
                y: 0,
                stagger: 0.1, // Adds a slight stagger for each panel
                duration: 1,
                ease: "power2.out", // Animation easing
              }
            );
            observer.unobserve(entry.target); // Unobserve after triggering animation
          }
        });
      }, {
        threshold: 0.5, // Trigger when at least 50% of the component is in the viewport
      });
  
      if (panelRef.current) {
        observer.observe(panelRef.current); // Start observing the panel container
      }
  
      // Clean up the observer on component unmount
      return () => {
        if (panelRef.current) {
          observer.unobserve(panelRef.current);
        }
      };
    }, []);

  return (
    <>  
        <main ref={panelRef}>
          <PortalARG/>
          <HomeSliderPage/>
          <ProgramasComponent/>
          {/* <FaqCard/> */}
          <NoticiasGnral/>
        </main>
    </>
  );
};


export default Home;