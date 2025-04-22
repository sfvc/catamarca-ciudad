import MapComponent from "@components/home/map";

const EdificiosPublicos = () => {
    return(
        <div className="container">
            <h1 style={{textAlign:"center"}}>Edificios Publicos</h1>
            <div className="edificiospublicos">
                <div style={{padding:'10px 0px 20px 0px'}}>
                    <MapComponent/>
                </div>
            </div>
        </div>
    )
}

export default EdificiosPublicos;