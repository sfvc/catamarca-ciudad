import {sectionItems} from "./grid.json"

const Card = ({ title, link, logo }) => (
  <li className="link2 text-center"> 
      <img src={logo} alt="" />
      <a href={link} className="">{title}</a>
  </li>
);

const CardContainer = () => {

  return (
    <div className="pane-content m-t-2">
      <div className="container home-new w-100 p-x-0">

          <ul className="list-inline pull-left w-100 p-b-3">
            {sectionItems.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} logo={card.image} />
            ))}
          </ul>
      </div>
    </div>
  );
};

export default CardContainer;