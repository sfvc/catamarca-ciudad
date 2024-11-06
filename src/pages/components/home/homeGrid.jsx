import {HomePageGrid} from "../../data/portal.json"


const HomeGrid = () => {
  
  return (
    <div className="pane-content cardcontainer m-t-2">
      <div className="container home-new p-x-0">

          <ul className="list-inline p-b-3">
            {HomePageGrid.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} logo={card.image} />
            ))}
          </ul>
      </div>
    </div>
  );
};

const Card = ({ title, link, logo }) => (
  <li className="link2 text-center"> 
      <img  src={logo} alt="" />
      <a href={link} className="texto-colorgrid">{title}</a>
  </li>
);

export default HomeGrid;