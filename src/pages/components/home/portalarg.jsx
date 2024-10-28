import { socialButtons } from './portal.json';

export const PortalARG = () => {
    return (
        <div>
            <div className="region region-content">
                <div id="block-system-main" className="block block-system clearfix">
                    <div className="panel-pane bg-img portal__container pane-texto">
                        <div className="pane-content portal_container2">
                            <div className="portal_container3 text-white p-b-2">
                                <header className="home-new input__div">
                                    <h1 className="text-center h1 tit-buscador unset-font-size">
                                        Portal oficial de la Municipalidad de Catamarca
                                    </h1>
                                    <br />
                                    <h2 className="text-center h2 tit-buscador unset-font-size">Seguinos en</h2>
                                    <br />
                                    <div className="btn-seguinos-container">
                                        {socialButtons.map((button, index) => (
                                            <button 
                                                key={index} 
                                                className={`btn btn-seguinos ${button.color}`} 
                                            >
                                                {button.name}
                                                <img src={button.image} alt={button.name} />
                                            </button>
                                        ))}
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
