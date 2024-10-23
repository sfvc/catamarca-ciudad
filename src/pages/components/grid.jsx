import {sectionItems} from "./grid.json"

const Card = ({ title, description, logo }) => (
    <a class="panel panel-default" href="#">
      <div class="panel-body">
        <div class="media">
          <div class="text-center hidden-xs panel-frame-fix-icono">
            <img src="../src/pages/images/test.svg"></img>
          </div>
          <div class="media-body">
            <h3 class="text-center">
            <span class="text-center visible-xs">
            <i class="fa fa-fw fa fa-briefcase text-primary"></i>
            </span>{title}</h3>
            <div class="text-muted panel-frame-bajada text-center">
            <p class="text-muted">{description}</p>
          </div>
          </div>
        </div>
      </div>
    </a>
);

const CardContainer = () => {

  return (
    <div className="container grid__container">
      {sectionItems.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardContainer;
