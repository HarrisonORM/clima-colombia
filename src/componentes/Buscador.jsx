/**
 * Componente Buscador
 * Muestra un selector de ciudades colombianas y un botón para buscar el clima
 */
import React, { useState } from "react";

function Buscador({ alBuscar }) {
    // Estado para almacenar la ciudad seleccionada por el usuario
    const [ciudad, setCiudad] = useState("");

    // Lista de ciudades principales de Colombia disponibles para consultar
    const ciudadesColombia = [
        "Bogotá",
        "Medellín",
        "Cali",
        "Barranquilla",
        "Cartagena",
        "Cúcuta",
        "Bucaramanga",
        "Pereira",
        "Santa Marta",
        "Ibagué",
        "Pasto",
        "Manizales",
        "Neiva",
        "Villavicencio",
        "Armenia",
        "Valledupar",
        "Montería",
        "Sincelejo",
        "Popayán",
        "Tunja",
        "Riohacha",
        "Quibdó",
        "Florencia",
        "Leticia"
    ];

    /**
     * Función que maneja el envío del formulario
     * Valida que se haya seleccionado una ciudad antes de buscar
     * @param {Event} e - Evento del formulario
     */
    const manejarEnvio = (e) => {
        e.preventDefault(); // Previene la recarga de la página
        
        // Validación: verifica que se haya seleccionado una ciudad
        if (!ciudad || ciudad === "") {
            alert("⚠️ Por favor selecciona una ciudad antes de buscar el clima");
            return;
        }
        
        // Si hay ciudad seleccionada, ejecuta la búsqueda
        if (ciudad.trim()) {
            alBuscar(ciudad); // Llama a la función del componente padre
        }
    };

    return (
        <form onSubmit={manejarEnvio} style={{ marginBottom: "20px" }}>
            <select 
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                className="input-ciudad"
            >
                <option value="">Seleccione una ciudad</option>
                {ciudadesColombia.map((nombreCiudad, index) => (
                    <option key={index} value={nombreCiudad}>
                        {nombreCiudad}
                    </option>
                ))}
            </select>
            <button type="submit" className="btn-buscar">Buscar Clima</button>
        </form>
    );
}

export default Buscador;