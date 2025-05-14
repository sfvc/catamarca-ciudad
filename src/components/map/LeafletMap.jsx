import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = ({ 
  width = '100%', 
  height = '600px', 
  center = [-28.4696, -65.7795], // Catamarca como centro predeterminado
  zoom = 12, 
  markers = [] 
}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Verificar si ya hay un mapa inicializado
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Crear nueva instancia del mapa
    const map = L.map(mapRef.current).setView(center, zoom);
    mapInstanceRef.current = map;

    // Añadir capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Corregir problema de iconos en entornos bundler
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
    });

    // Añadir marcadores
    markers.forEach(marker => {
      L.marker(marker.position)
        .addTo(map)
        .bindPopup(`<strong>${marker.title}</strong>${marker.description ? `<p>${marker.description}</p>` : ''}`);
    });

    // Limpiar al desmontar
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [center, zoom, markers]); // Recargar si cambian estos props

  return <div ref={mapRef} style={{ width, height }}></div>;
};

export default LeafletMap;