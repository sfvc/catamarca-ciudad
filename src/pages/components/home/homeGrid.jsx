import { HomePageGrid } from '../../data/portal.json';

const HomeGrid = () => {
  const handleLinkClick = (e, card) => {
    // Check if the link is external
    if (card.external) {
      // Prevent default behavior
      e.preventDefault();
      // Open the link in a new tab programmatically
      window.open(card.link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <>
      <div className='Tramites__container'>
        <div className="gridPortal__card container">
          {HomePageGrid.map((card, index) => (
            <a
              key={index}
              href={card.link}
              style={{ all: 'unset' }}
              onClick={(e) => handleLinkClick(e, card)} // Add the click handler here
            >
              <div className="TramistedGrid__card">
                <img className="TramistedGrid__cardimg padding-15" src={card.image} alt={card.title} />
                <h3 className="TramistedGrid__card-title">{card.title}</h3>
                <small className="TramistedGrid__card-small">{card.description}</small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeGrid;
