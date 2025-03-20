import { socialButtons } from '../../data/portal.json';
import SearchBarPortal from './searchBarPortal';

export const PortalARG = () => {
    return (
        <div>
            <div className="region region-content">
                <div id="block-system-main" className="block block-system clearfix">
                        {/* PROBLEMA */}
                    <div className="panel-pane bg-img portal__container pane-texto">
                        {/* PROBLEMA */}
                        <div className="pane-content portal_container2">
                            <div className="portal_container3 text-white p-b-2">
                                <header className="home-new input__div">
                                    <h1 className="home_titulo">
                                        Portal oficial de la Municipalidad de Catamarca
                                    </h1>
                                    <br />
                                        <SearchBarPortal/>
                                    <br />
                                    <h2 className="home_titulo">Seguinos en</h2>
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
