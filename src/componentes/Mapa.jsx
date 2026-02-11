/**
 * Componente Mapa
 * Muestra un mapa interactivo con la ubicación de la ciudad consultada
 * Utiliza React Leaflet para la integración con OpenStreetMap
 */
import React, { useEffect } from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * Componente auxiliar para recentrar el mapa cuando cambian las coordenadas
 * @param {Array} coordenadas - Array con latitud y longitud [lat, lng]
 */
function RecentradorMapa({ coordenadas }) {
    const mapa = useMap(); // Obtiene la instancia del mapa de Leaflet
    
    useEffect(() => {
        // Centra el mapa en las nuevas coordenadas con zoom 13
        mapa.setView(coordenadas, 13);
    }, [coordenadas, mapa]); // Se ejecuta cuando cambian las coordenadas
    
    return null; // Este componente no renderiza nada visible
}

/**
 * Componente principal del Mapa
 * @param {number} latitud - Latitud de la ubicación
 * @param {number} longitud - Longitud de la ubicación
 * @param {string} lugar - Nombre del lugar para mostrar en el popup
 */
function Mapa({ latitud, longitud, lugar }) {
        // Convierte latitud y longitud en un array de coordenadas
        const posicion = [latitud, longitud];

        return(
            <div className="contenedor-mapa">
                {/* Contenedor principal del mapa con configuración inicial */}
                <MapContainer center={posicion} zoom={13} style={{ height: '300px', width: '100%', borderRadius: '15px' }}>
                    {/* Capa de tiles de OpenStreetMap (el mapa base) */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; OpenStreetMap'
                    />
                    {/* Marcador en la posición de la ciudad */}
                    <Marker position={posicion}>
                        {/* Popup que se muestra al hacer clic en el marcador */}
                        <Popup>{lugar}</Popup>
                    </Marker>
                    {/* Componente para recentrar el mapa cuando cambian las coordenadas */}
                    <RecentradorMapa coordenadas={posicion} />
                </MapContainer>
            </div>
        );
}

export default Mapa;