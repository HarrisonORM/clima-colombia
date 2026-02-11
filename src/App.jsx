/**
 * Componente principal de la aplicación de clima
 * Gestiona el estado global y coordina todos los componentes
 */
import React, { useState } from 'react';
import Buscador from './componentes/Buscador';
import PanelClima from './componentes/PanelClima';
import { obtenerClima } from './servicios/apiClima';
import './App.css';

function App() {
    // Estados para manejar los datos del clima, estados de carga y errores
    const [datosClima, setDatosClima] = useState(null); // Almacena los datos del clima obtenidos de la API
    const [cargando, setCargando] = useState(false); // Indica si está cargando los datos
    const [error, setError] = useState(null); // Almacena mensajes de error si algo falla

    /**
     * Función que maneja la búsqueda del clima
     * @param {string} ciudad - Nombre de la ciudad a buscar
     */
    const manejarBusqueda = async (ciudad) => {
        setCargando(true); // Activa el estado de carga
        setError(null); // Limpia errores previos
        setDatosClima(null); // Limpia datos anteriores

        try {
            // Llama a la API para obtener los datos del clima
            const resultado = await obtenerClima(ciudad);
            setDatosClima(resultado); // Guarda los datos obtenidos
        } catch (err) {
            // Si hay error, muestra un mensaje al usuario
            setError("No encontramos esa ciudad en Colombia. Intenta verificar el nombre.");
        } finally {
            setCargando(false); // Desactiva el estado de carga siempre al final
        }
    };

    /**
     * Función para volver a la pantalla de bienvenida inicial
     * Limpia los datos del clima y errores
     */
    const volverInicio = () => {
        setDatosClima(null);
        setError(null);
    };

    return (
        <div className="app-container">
            <h1 className="titulo">
                <span className="titulo-principal">CLIMA</span>
                <span className="titulo-secundario">COLOMBIA</span>
            </h1>
            
            <Buscador alBuscar={manejarBusqueda} />
            
            {cargando && <div className="spinner">Cargando satélite...</div>}
            
            {error && <div className="mensaje-error">{error}</div>}
            {datosClima ? (
                <PanelClima datos={datosClima} volverInicio={volverInicio} />
            ) : (
                !cargando && !error && (
                    <div className="bienvenida">
                        <div className="icono-clima-animado">
                            <div className="sol"></div>
                            <div className="nube nube-1"></div>
                            <div className="nube nube-2"></div>
                        </div>
                        <h2 className="bienvenida-titulo">Bienvenido al Sistema Meteorológico Inteligente</h2>
                        <div className="bienvenida-contenido">
                            <p className="intro-principal">
                                Accede a información meteorológica en tiempo real de las principales ciudades de Colombia.
                                Nuestro sistema se conecta directamente con estaciones meteorológicas para brindarte datos precisos y actualizados.
                            </p>
                            <div className="caracteristicas">
                                <div className="caracteristica">
                                    <span className="icono">🌡️</span>
                                    <h3>Temperatura en Vivo</h3>
                                    <p>Consulta la temperatura actual y sensación térmica</p>
                                </div>
                                <div className="caracteristica">
                                    <span className="icono">📍</span>
                                    <h3>Ubicación Geográfica</h3>
                                    <p>Visualiza la ciudad en el mapa con coordenadas exactas</p>
                                </div>
                                <div className="caracteristica">
                                    <span className="icono">💧</span>
                                    <h3>Condiciones Climáticas</h3>
                                    <p>Humedad, estado del cielo y condiciones detalladas</p>
                                </div>
                            </div>
                            <p className="cta">
                                Selecciona una ciudad del menú superior para comenzar tu consulta meteorológica
                            </p>
                        </div>
                    </div>
                )
            )}

            <div className="firma-dev">
                <div className="firma-contenido">
                    <span className="firma-icono">⚡</span>
                    <span className="firma-texto">Desarrollado por <strong>Harrison Rengifo Marín</strong></span>
                    <span className="firma-icono">⚡</span>
                </div>
            </div>
        </div>
    );
}

export default App;