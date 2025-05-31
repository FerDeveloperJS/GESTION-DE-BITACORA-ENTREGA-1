class ActividadModel {
    constructor(fecha, supervisor, descripcion, anexos, responsable, condicionesClimaticas) {
        this.fecha = fecha;
        this.supervisor = supervisor;
        this.descripcion = descripcion;
        this.anexos = anexos;
        this.responsable = responsable;
        this.condicionesClimaticas = condicionesClimaticas;
    }

    // Method to validate the activity data
    validar() {
        if (!this.fecha || !this.supervisor || !this.descripcion || !this.responsable) {
            throw new Error("Todos los campos son obligatorios.");
        }
    }
}

export { ActividadModel };