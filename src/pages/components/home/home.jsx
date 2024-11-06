
import FaqCard from './faq';
import HomeGrid from './homeGrid';
import MapComponent from './map';
import { PortalARG } from './portalarg';

export const Home = () => {
  return (
    <>  
        <main>
          <PortalARG/>
          <HomeGrid/>
          <FaqCard/>
          <MapComponent/>
        </main>
    </>
  );
};
