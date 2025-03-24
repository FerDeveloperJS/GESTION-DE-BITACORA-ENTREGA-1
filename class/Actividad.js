export class Actividad {
    constructor(fechaHora, supervisor, descripcion, anexos, responsable, condicionesClimaticas) {
        this.fechaHora = fechaHora
        this.supervisor = supervisor
        this.descripcion = descripcion
        this.anexos = anexos
        this.responsable = responsable
        this.condicionesClimaticas = condicionesClimaticas
    }

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

