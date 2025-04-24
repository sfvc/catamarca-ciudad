import SearchBarPortal from '@components/home/searchBarPortal';

export const PortalARG = () => {
    return (
        <div id="block-system-main" className="block block-system clearfix">
            <div className="panel-pane bg-img portal__container pane-texto">
                <div className="pane-content portal_container2">
                    <div className="portal_container3 text-white p-b-2">
                        <header className="home-new input__div">
                            <h1 className="home_titulo">Portal oficial de la Municipalidad de Catamarca</h1>
                            <br />

                            <SearchBarPortal/>
                            <br />
                        </header>
                    </div>
                </div>
            </div>
        </div>
    );
};
