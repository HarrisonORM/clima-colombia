/**
 * Servicio para conectarse a la API de OpenWeatherMap
 * Obtiene los datos del clima en tiempo real de ciudades colombianas
 */
import axios from 'axios';

// Clave de API de OpenWeatherMap (debería estar en variables de entorno en producción)
const CLAVE_API = 'cd452d96f9a77f293d4b7a274d1260b5';
// URL base de la API de OpenWeatherMap
const URL_BASE = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Función para obtener los datos del clima de una ciudad
 * @param {string} ciudad - Nombre de la ciudad a consultar
 * @returns {Promise<Object>} Objeto con todos los datos del clima
 * @throws {Error} Si la ciudad no existe o hay problemas de conexión
 */
export const obtenerClima = async (ciudad) => {
    try {
        // Realiza la petición GET a la API con los parámetros necesarios
        const respuesta = await axios.get(URL_BASE, {
            params: {
                q: `${ciudad},CO`, // Busca la ciudad en Colombia (CO)
                appid: CLAVE_API, // Clave de autenticación
                units: 'metric', // Unidades métricas (Celsius)
                lang: 'es' // Idioma español para las descripciones
            }
        });
        return respuesta.data; // Retorna los datos del clima
    } catch (error) {
        // Si hay error, lo propaga para que sea manejado por el componente
        throw error;
    }
};