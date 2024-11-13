import {HomePageGrid} from '../../data/portal.json'

const HomeGrid = () => {

  return (
    <>
      <div className='Tramites__container'>
        <div className="TramistedGrid__grid-container container">
          {HomePageGrid.map((card, index) => (
            <a
              key={index}
              href={card.link}
              style={{ all: 'unset' }}
            >
              <div className="TramistedGrid__card">
                <img className="TramistedGrid__cardimg" src={card.image} alt={card.title} />
                <h3 className="TramistedGrid__card-title">{card.title}</h3>
                <small className="TramistedGrid__card-small">{card.descrition}</small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeGrid;
