
import FaqCard from '../components/home/faq';
import CardContainer from '../components/home/grid';
import Header from '../components/home/header';
import MapComponent from '../components/home/map';
import { PortalARG } from '../components/home/portalarg';
import '../index.css'

export const Home = () => {
  return (
    <>  
      <Header/>
      <main>
        <PortalARG/>
        <CardContainer/>
        <FaqCard/>
        <MapComponent/>
      </main>
    </>
  );
};
