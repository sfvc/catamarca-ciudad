// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [-28.477233, -65.77752]; // Example coordinates

  // URL of the car image (you can replace this with your own image URL)
  const carImageUrl = './src/pages/images/palacioMuni.jpg'; // Replace with your image URL

  return (
    <MapContainer
      className="container"
      center={position}
      zoom={16}
      style={{
        height: '400px',
        margin: '0 auto 24px',
        borderRadius: '10px',
      }}
      scrollWheelZoom={false}    // Disable zooming with the mouse wheel
      zoomControl={false}        // Disable the zoom control buttons
      doubleClickZoom={false}    // Disable zooming on double click
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <div>
            <h3>Palacio Municipal</h3>
            <p>Accede al link para guiarte desde maps</p>
            <a href="https://maps.app.goo.gl/GmhiqdGD4riRadqB7" target='_blank'>Ver en Maps</a>
            <img
              src={carImageUrl}
              alt="Car"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBlock:'10px' }} // Adjust the image size
            />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
