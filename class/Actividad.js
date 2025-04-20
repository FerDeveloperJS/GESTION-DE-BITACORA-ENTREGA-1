/**
 * Representa una actividad registrada en la bitácora.
 */
export class Actividad {

    /**
     * Crea una nueva actividad.
     * 
     * @param {Date} fechaHora - Fecha y hora de la actividad.
     * @param {Supervisor} supervisor - Supervisor responsable de la actividad.
     * @param {string} descripcion - Descripción de la actividad.
     * @param {Array<string>} anexos - Archivos o documentos anexos relacionados.
     * @param {string} responsable - Persona responsable de la actividad.
     * @param {string} condicionesClimaticas - Condiciones climáticas durante la actividad.
     */
    constructor(fechaHora, supervisor, descripcion, anexos, responsable, condicionesClimaticas) {
        this.fechaHora = fechaHora
        this.supervisor = supervisor
        this.descripcion = descripcion
        this.anexos = anexos
        this.responsable = responsable
        this.condicionesClimaticas = condicionesClimaticas
    }

    /**
     * Devuelve un resumen formateado de la actividad.
     * 
     * @returns {string} Resumen de la actividad con fecha, supervisor, descripción, anexos, responsable y clima.
     */
    mostrarResumen() {

        
        const year = this.fechaHora.getFullYear()
        const month = String(this.fechaHora.getMonth() + 1).padStart(2, "0")
        const day = String(this.fechaHora.getDate()).padStart(2, "0")
        const hours = String(this.fechaHora.getHours()).padStart(2, "0") 
        const minutes = String(this.fechaHora.getMinutes()).padStart(2, "0") 
        const fechaFormateada = `${year}-${month}-${day} ${hours}:${minutes}`
        
        return `Fecha y Hora: ${fechaFormateada}\n` +
                `Supervisor: ${this.supervisor.nombre}\n` +
                `Descripción: ${this.descripcion}\n` +
                `Anexos: ${this.anexos.join(", ")}\n` +
                `Responsable: ${this.responsable}\n` +
                `Condiciones Climáticas: ${this.condicionesClimaticas}`
    }
}

