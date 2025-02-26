
import BannerComponent from './banners';
import FaqCard from './faq';
import HomeSliderPage from './homeSlider';
import MapComponent from './map';
import { PortalARG } from './portalarg';
import ProgramasComponent from './programas';


const Home = () => {
  return (
    <>  
        <main>
          <PortalARG/>
          <HomeSliderPage/>
          <ProgramasComponent/>
          <FaqCard/>
        </main>
    </>
  );
};


export default Home;