import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapComponent = () => {
  const position = [-28.4685, -65.7793]; // Example coordinates

  // URL of the car image (you can replace this with your own image URL)
  const carImageUrl = '/images/palacioMuni.jpg'; // Replace with your image URL

  return (
    <MapContainer
      className=""
      center={position}
      zoom={13}
      style={{
        height: '600px',
        borderRadius: '10px',
        width:'100%',
        zIndex:1,
      }}
      scrollWheelZoom={true}    // Disable zooming with the mouse wheel
      zoomControl={true}        // Disable the zoom control buttons
      doubleClickZoom={true}    // Disable zooming on double click
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
        position={position}
      >
        <Popup>
          <div>
            <small>Accede al link para guiarte desde maps</small>
            <h3>Palacio Municipal</h3>
            <img
              src={carImageUrl}
              alt="Car"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBlock:'10px' }} // Adjust the image size
            />
            <a href="https://maps.app.goo.gl/GmhiqdGD4riRadqB7" target='_blank'>Ver en Google Maps</a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
