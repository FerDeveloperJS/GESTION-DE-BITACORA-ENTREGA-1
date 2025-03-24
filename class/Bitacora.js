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


export class Bitacora {
    constructor(fechaActual = new Date()) {
        this.actividades = []
        this.fechaActual = new Date(fechaActual).setHours(23, 59, 59, 999); // Normalizar a fin del día
        
    }

    registrarActividad(actividad) {

        if (actividad.supervisor === null) {
            throw new(ErrorSupervisorInvalido)
        }

        if (actividad.descripcion.length > 3000 || actividad.descripcion === "") {
            throw new(ErrorDescripcionInvalida)
        }

        if (actividad.responsable === "") {
            throw new(ErrorResponsableInvalido)
        }


        

        
        const fechaActividad = new Date(actividad.fechaHora).getTime();
        
        

        
        if (fechaActividad > this.fechaActual) {
            throw new ErrorFechaMuyFutura();
        }



        this.actividades.push(actividad)
        return true

    }


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

