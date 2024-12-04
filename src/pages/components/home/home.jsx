
import BannerComponent from './banners';
import FaqCard from './faq';
import HomeSliderPage from './homeSlider';
import MapComponent from './map';
import { PortalARG } from './portalarg';
import ProgramasComponent from './programas';


export const Home = () => {
  return (
    <>  
        <main>
          <PortalARG/>
          <HomeSliderPage/>
          <BannerComponent/>
          <ProgramasComponent/>
          <FaqCard/>
        </main>
    </>
  );
};
