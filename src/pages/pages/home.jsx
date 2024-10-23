import FaqCard from "../components/faq";
import CardContainer from "../components/grid";
import MapComponent from "../components/map";
import { PortalARG } from "../components/portalarg";

export const Home = () => {
  return (
    <>  
      <PortalARG/>
      <CardContainer />
      <FaqCard/>
      <MapComponent/>
    </>
  );
};
