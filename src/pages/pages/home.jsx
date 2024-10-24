import FaqCard from "../components/faq";
import CardContainer from "../components/grid";
import Header from "../components/header";
import MapComponent from "../components/map";
import { PortalARG } from "../components/portalarg";
import '../index.css'

export const Home = () => {
  return (
    <>  
      <Header/>
      <main>
        <PortalARG/>
        <CardContainer />
        <FaqCard/>
        <MapComponent/>
      </main>
    </>
  );
};
