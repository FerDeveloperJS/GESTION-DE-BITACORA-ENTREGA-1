import {
    ErrorFechaMuyFutura,
    ErrorDescripcionInvalida,
    ErrorFechaPasada,
    ErrorSupervisorInvalido,
    ErrorResponsableInvalido,
    ErrorActividadesDespuesDe1Semana,
    ErrorRangoDeFechasInvalido,
    ErrorFechaDeInicioInvalida,
    ErrorFechaDeFinInvalida
} from "../excepciones/Bitacora_excepciones.js"


import { Actividad } from "./Actividad.js"


/**
 * Representa una bitácora para registrar actividades y generar reportes.
 * 
 * Esta clase permite registrar actividades, consultar las actividades dentro de un rango de fechas y generar reportes de actividades.
 */
export class Bitacora {

    /**
     * Crea una instancia de la clase Bitacora.
     * 
     * @param {Date} fechaActual - La fecha actual para la bitácora, por defecto es la fecha actual.
     */
    constructor(fechaActual = new Date()) {
        
        this.actividades = []

        this.fechaActual = new Date(fechaActual).setHours(23, 59, 59, 999); // Normalizar a fin del día
        
    }

    /**
     * Registra una actividad en la bitácora.
     * 
     * @param {Actividad} actividad - La actividad que se desea registrar.
     * @throws {ErrorSupervisorInvalido} Si el supervisor es nulo.
     * @throws {ErrorDescripcionInvalida} Si la descripción de la actividad es inválida.
     * @throws {ErrorResponsableInvalido} Si el responsable de la actividad es inválido.
     * @throws {ErrorFechaMuyFutura} Si la fecha de la actividad es en el futuro.
     * @returns {boolean} Devuelve `true` si la actividad fue registrada correctamente.
     */
    registrarActividad(actividad) {

        const fechaActividad = new Date(actividad.fechaHora).getTime();



        if (actividad.supervisor === null) {
            throw new(ErrorSupervisorInvalido)
        }

        if (actividad.descripcion.length > 3000 || actividad.descripcion === "") {
            throw new(ErrorDescripcionInvalida)
        }

        if (actividad.responsable === "") {
            throw new(ErrorResponsableInvalido)
        }

        

        
        
        if (fechaActividad > this.fechaActual) {
            throw new ErrorFechaMuyFutura();
        }


    

        this.actividades.push(actividad)
        return true

    }


    /**
     * Consulta las actividades dentro de un rango de fechas.
     * 
     * @param {Date|string} fechaInicio - Fecha de inicio para filtrar actividades.
     * @param {Date|string} fechaFin - Fecha de fin para filtrar actividades.
     * @throws {ErrorRangoDeFechasInvalido} Si el rango de fechas es inválido.
     * @throws {ErrorFechaDeInicioInvalida} Si la fecha de inicio es inválida.
     * @throws {ErrorFechaDeFinInvalida} Si la fecha de fin es inválida.
     * @throws {ErrorFechaMuyFutura} Si alguna de las fechas es demasiado futura.
     * @returns {Array<Actividad>} Lista de actividades que están dentro del rango de fechas.
     */
    consultarActividades(fechaInicio, fechaFin) {

        if ((fechaInicio === null || fechaInicio === undefined) && (fechaFin === null || fechaFin === undefined)) {
            throw new ErrorRangoDeFechasInvalido();
        }

        if (fechaInicio === null || fechaInicio === undefined) {
            throw new ErrorFechaDeInicioInvalida();
        }
    
        if (fechaFin === null || fechaFin === undefined) {
            throw new ErrorFechaDeFinInvalida();
        }

        const fechaInicioMs = new Date(fechaInicio).getTime();
        const fechaFinMs = new Date(fechaFin).getTime();
        const unaSemanaMs = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
        const fechaActualMs = new Date(this.fechaActual).getTime()

        if (fechaInicioMs > fechaActualMs || fechaFin > fechaActualMs) {
            throw new ErrorFechaMuyFutura()
        }



        if (fechaInicioMs > fechaFinMs) {
            throw new ErrorRangoDeFechasInvalido()
        }
    
        if (fechaFinMs - fechaInicioMs > unaSemanaMs) {
            throw new ErrorFechaDeFinInvalida()
        }


        return this.actividades.filter(actividad => {
            const fechaActividadMs = new Date(actividad.fechaHora).getTime();
            const fechaInicioMs = new Date(fechaInicio).getTime();
            const fechaFinMs = new Date(fechaFin).getTime();
            
            return fechaActividadMs >= fechaInicioMs && fechaActividadMs <= fechaFinMs;
        });
    }

    /**
     * Genera un reporte de actividades dentro de un rango de fechas.
     * 
     * @param {Date|string} fechaInicio - Fecha de inicio para el reporte.
     * @param {Date|string} fechaFin - Fecha de fin para el reporte.
     * @throws {ErrorRangoDeFechasInvalido} Si el rango de fechas es inválido.
     * @throws {ErrorFechaDeInicioInvalida} Si la fecha de inicio es inválida.
     * @throws {ErrorFechaDeFinInvalida} Si la fecha de fin es inválida.
     * @throws {ErrorFechaMuyFutura} Si alguna de las fechas es demasiado futura.
     * @returns {boolean} Devuelve `true` si el reporte fue generado correctamente, `false` si no hay actividades en el rango.
     */
    generarReporte(fechaInicio, fechaFin) {

        if ((fechaInicio === null || fechaInicio === undefined) && (fechaFin === null || fechaFin === undefined)) {
            throw new ErrorRangoDeFechasInvalido();
        }

        if (fechaInicio === null || fechaInicio === undefined) {
            throw new ErrorFechaDeInicioInvalida();
        }
    
        if (fechaFin === null || fechaFin === undefined) {
            throw new ErrorFechaDeFinInvalida();
        }

        const fechaInicioMs = new Date(fechaInicio).getTime();
        const fechaFinMs = new Date(fechaFin).getTime();
        const unaSemanaMs = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
        const fechaActualMs = new Date(this.fechaActual).getTime(); // Convertir a milisegundos correctamente
        
    
        if (fechaInicioMs > fechaActualMs || fechaFin > fechaActualMs) {
            throw new ErrorFechaMuyFutura()
        }

        // Validar si fechaInicio es mayor que fechaFin
        if (fechaInicioMs > fechaFinMs) {
            throw new ErrorRangoDeFechasInvalido();
        }

        // 🔥 NUEVO ORDEN: Primero verificamos el rango total
        if (fechaFinMs - fechaInicioMs > unaSemanaMs) {
            throw new ErrorFechaDeFinInvalida();
        }

    


        const actividadesFiltradas = this.consultarActividades(fechaInicio, fechaFin);
        
        if (actividadesFiltradas.length === 0) {
            return false; // No hay actividades registradas en ese periodo
        }
 
    
        console.log(`Reporte generado desde ${fechaInicio} hasta ${fechaFin}`)
        return true

    }
}

