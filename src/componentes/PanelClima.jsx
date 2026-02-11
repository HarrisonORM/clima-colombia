/**
 * Componente PanelClima
 * Muestra toda la información del clima de una ciudad:
 * - Temperatura actual y sensación térmica
 * - Descripción del clima
 * - Humedad
 * - Animaciones dinámicas según el clima
 * - Mapa de ubicación
 */
import React, { useEffect } from 'react';
import Mapa from './Mapa';

function PanelClima({ datos, volverInicio }) {
    // Desestructuración: Extraemos los datos específicos que necesitamos del objeto de la API
    const { name, main, weather, coord } = datos;
    // URL del icono del clima proporcionado por OpenWeatherMap
    const iconoUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    
    /**
     * Función para determinar qué clase CSS aplicar según el tipo de clima
     * Esto activará las animaciones correspondientes en el fondo
     * @returns {string} Clase CSS para el tipo de clima
     */
    const obtenerAnimacionClima = () => {
        const condicion = weather[0].main.toLowerCase(); // Obtiene el tipo de clima en minúsculas
        
        // Switch para asignar la clase CSS según el tipo de clima
        switch(condicion) {
            case 'rain':
                return 'clima-lluvia'; // Lluvia normal
            case 'drizzle':
                return 'clima-llovizna'; // Llovizna ligera
            case 'thunderstorm':
                return 'clima-tormenta'; // Tormenta con relámpagos
            case 'snow':
                return 'clima-nieve'; // Nieve
            case 'clear':
                return 'clima-despejado'; // Cielo despejado/soleado
            case 'clouds':
                return 'clima-nublado'; // Nublado
            case 'mist':
            case 'fog':
            case 'haze':
                return 'clima-niebla'; // Niebla o neblina
            default:
                return 'clima-default'; // Por defecto, sin animación
        }
    };

    /**
     * useEffect para crear las animaciones climáticas dinámicamente
     * Genera elementos HTML (gotas, copos, nubes, etc.) según el tipo de clima
     * Se ejecuta cada vez que cambian los datos del clima
     */
    useEffect(() => {
        const animacionContainer = document.querySelector('.animacion-fondo');
        if (!animacionContainer) return; // Si no existe el contenedor, sale

        // Limpia cualquier animación previa antes de crear las nuevas
        animacionContainer.innerHTML = '';

        const condicion = weather[0].main.toLowerCase();

        // ===== ANIMACIÓN DE LLUVIA =====
        // Crea 100 gotas de lluvia con posiciones y velocidades aleatorias
        if (condicion === 'rain') {
            for (let i = 0; i < 100; i++) {
                const gota = document.createElement('div');
                gota.className = 'gota-lluvia';
                gota.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
                gota.style.animationDelay = `${Math.random() * 2}s`; // Delay aleatorio para efecto natural
                gota.style.animationDuration = `${0.5 + Math.random() * 0.3}s`; // Velocidad de caída aleatoria
                animacionContainer.appendChild(gota);
            }
        }

        // ===== ANIMACIÓN DE LLOVIZNA =====
        // Similar a lluvia pero más ligera (50 gotas) y más lenta
        if (condicion === 'drizzle') {
            for (let i = 0; i < 50; i++) {
                const gota = document.createElement('div');
                gota.className = 'gota-llovizna'; // Clase con gotas más pequeñas
                gota.style.left = `${Math.random() * 100}%`;
                gota.style.animationDelay = `${Math.random() * 3}s`;
                gota.style.animationDuration = `${1 + Math.random() * 0.5}s`; // Más lento que lluvia normal
                animacionContainer.appendChild(gota);
            }
        }

        // ===== ANIMACIÓN DE TORMENTA =====
        // Combina lluvia intensa (120 gotas) + efectos de relámpagos
        if (condicion === 'thunderstorm') {
            // Gotas de lluvia muy intensa
            for (let i = 0; i < 120; i++) {
                const gota = document.createElement('div');
                gota.className = 'gota-tormenta'; // Gotas más gruesas y rápidas
                gota.style.left = `${Math.random() * 100}%`;
                gota.style.animationDelay = `${Math.random() * 1.5}s`;
                gota.style.animationDuration = `${0.3 + Math.random() * 0.2}s`; // Caída muy rápida
                animacionContainer.appendChild(gota);
            }
            // Efecto de relámpagos con destellos blancos intermitentes
            const relampago = document.createElement('div');
            relampago.className = 'relampago';
            animacionContainer.appendChild(relampago);
        }

        // ===== ANIMACIÓN DE NIEVE =====
        // Crea 50 copos de nieve que caen con movimiento de balanceo
        if (condicion === 'snow') {
            for (let i = 0; i < 50; i++) {
                const copo = document.createElement('div');
                copo.className = 'copo-nieve';
                copo.innerHTML = '❄'; // Emoji de copo de nieve
                copo.style.left = `${Math.random() * 100}%`;
                copo.style.animationDelay = `${Math.random() * 5}s`;
                copo.style.animationDuration = `${5 + Math.random() * 5}s`; // Caída lenta
                copo.style.fontSize = `${10 + Math.random() * 10}px`; // Tamaño aleatorio
                copo.style.opacity = Math.random(); // Opacidad aleatoria para profundidad
                animacionContainer.appendChild(copo);
            }
        }

        // ===== ANIMACIÓN DE CLIMA DESPEJADO/SOLEADO =====
        // Muestra un sol brillante con rayos de luz
        if (condicion === 'clear') {
            const sol = document.createElement('div');
            sol.className = 'sol-animado';
            sol.innerHTML = '☀️'; // Emoji de sol
            animacionContainer.appendChild(sol);
            
            // Crea 8 rayos de luz alrededor del sol
            for (let i = 0; i < 8; i++) {
                const rayo = document.createElement('div');
                rayo.className = 'rayo-sol';
                rayo.style.transform = `rotate(${i * 45}deg)`; // Distribuye los rayos en círculo
                sol.appendChild(rayo);
            }
        }

        // ===== ANIMACIÓN DE NUBLADO =====
        // Muestra 5 nubes flotando de izquierda a derecha
        if (condicion === 'clouds') {
            for (let i = 0; i < 5; i++) {
                const nube = document.createElement('div');
                nube.className = 'nube-animada';
                nube.innerHTML = '☁️'; // Emoji de nube
                nube.style.top = `${Math.random() * 60}%`; // Altura aleatoria
                nube.style.animationDelay = `${i * 2}s`; // Desfase entre nubes
                nube.style.animationDuration = `${15 + Math.random() * 10}s`; // Velocidad de desplazamiento
                nube.style.fontSize = `${30 + Math.random() * 30}px`; // Tamaño aleatorio
                nube.style.opacity = 0.3 + Math.random() * 0.4; // Opacidad variable
                animacionContainer.appendChild(nube);
            }
        }

        // ===== ANIMACIÓN DE NIEBLA =====
        // Crea 3 capas de niebla que se mueven horizontalmente
        if (condicion === 'mist' || condicion === 'fog' || condicion === 'haze') {
            for (let i = 0; i < 3; i++) {
                const niebla = document.createElement('div');
                niebla.className = 'capa-niebla';
                niebla.style.top = `${i * 33}%`; // Distribuye las capas verticalmente
                niebla.style.animationDelay = `${i * 2}s`; // Desfase entre capas
                animacionContainer.appendChild(niebla);
            }
        }

    }, [weather]); // Se ejecuta cada vez que cambian los datos del clima

    return (
        <div className={`tarjeta-clima ${obtenerAnimacionClima()}`}>
            {/* Contenedor para las animaciones de fondo dinámicas */}
            <div className="animacion-fondo"></div>
            
            {/* Contenido principal que se muestra sobre las animaciones */}
            <div className="contenido-clima">
                {/* Nombre de la ciudad */}
                <h2>{name}, Colombia</h2>
                
                {/* Información principal: icono y temperatura */}
                <div className="info-principal">
                    <img src={iconoUrl} alt="icono del clima" />
                    <span className="temperatura">{Math.round(main.temp)}°C</span>
                </div>
                
                {/* Descripción del clima (ej: "cielo claro", "lluvia ligera") */}
                <p className="descripcion">{weather[0].description}</p>
                
                {/* Información adicional del clima */}
                <div className="detalles-extra">
                    <p>Humedad: <b>{main.humidity}%</b></p>
                    <p>Sensación: <b>{Math.round(main.feels_like)}°C</b></p>
                </div>

                {/* Mapa interactivo con la ubicación de la ciudad */}
                <Mapa latitud={coord.lat} longitud={coord.lon} lugar={name} />

                {/* Botón para volver a la pantalla de bienvenida */}
                <button onClick={volverInicio} className="btn-volver">
                    ← Volver al inicio
                </button>
            </div>
        </div>
    );
}

export default PanelClima;