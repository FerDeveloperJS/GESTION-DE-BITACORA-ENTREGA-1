// EXEPCIONES PARA LA FUNCIONALIDAD REGISTRAR ACTIVIDAD


/**
 * Se lanza cuando se intenta registrar una actividad con una fecha futura no permitida.
 * 
 * Este error se lanza cuando el usuario intenta registrar una actividad con una fecha que está demasiado lejos en el futuro
 * 
 * @extends {Error}
 */
export class ErrorFechaMuyFutura extends Error {
    constructor() {
        super("No se puede registrar una actividad con una fecha muy futura ni consultar.")
        this.name = "ErrorFechaMuyFutura"
    }
}

/**
 * Se lanza cuando la descripción de la actividad está vacía o excede los 3000 caracteres.
 * 
 * Este error se lanza cuando el usuario intenta registrar una actividad con una descripción vacía o que supera el límite de 3000 caracteres.
 * 
 * @extends {Error}
 */
export class ErrorDescripcionInvalida extends Error {
    constructor() {
        super("La descripción de la actividad no puede superar los 3000 caracteres y no puede estar vacia.");
        this.name = "ErrorDescripcionInvalida";
    }
}


/**
 * Se lanza cuando no se proporciona un supervisor válido al registrar una actividad.
 * 
 * Este error se lanza cuando el usuario intenta registrar una actividad sin haber asignado un supervisor válido,
 * 
 * lo que es obligatorio para el registro de la actividad.
 * @extends {Error}
 */
export class ErrorSupervisorInvalido extends Error {
    constructor() {
        super("No se puede registrar una actividad sin un supervisor válido.");
        this.name = "ErrorSupervisorInvalido";
    }
}

/**
 * Se lanza cuando no se proporciona un responsable válido al registrar una actividad.
 * 
 * Este error se lanza cuando el usuario intenta registrar una actividad sin haber asignado un responsable válido,
 * 
 * lo que es obligatorio para el registro de la actividad.
 * @extends {Error}
 */
export class ErrorResponsableInvalido extends Error {
    constructor() {
        super("No se puede registrar una actividad sin un responsable válido.");
        this.name = "ErrorResponsableInvalido";
    }
}

/**
 * Se lanza cuando se intenta registrar una actividad cuya fecha ya pasó hace más de una semana.
 * 
 * Este error se lanza cuando el usuario intenta registrar una actividad con una fecha que ya ha pasado hace más de una semana,
 * 
 * lo que no es permitido por la aplicación.
 * @extends {Error}
 */
export class ErrorFechaPasada extends Error {
    constructor() {
        super("No se puede registrar una actividad ya pasada 1 semana")
        this.name = "ErrorFechaPesada"
    }
}


/**
 * Se lanza al intentar consultar actividades fuera del rango permitido de una semana.
 * 
 * Este error se lanza cuando el usuario intenta consultar actividades que están fuera del límite de una semana,
 * 
 * lo que no está permitido según las reglas de la aplicación.
 * @extends {Error}
 */
export class ErrorActividadesDespuesDe1Semana extends Error {
    constructor() {
        super("No se pueden listar actividades mas alla de una semana")
        this.name = "ErrorActividadDespuesDe1Semana"
    }
}

/**
 * Se lanza cuando el rango entre fecha de inicio y fecha de fin no es válido.
 * 
 * Este error se lanza cuando el usuario intenta consultar actividades o generar un reporte con un rango de fechas inválido,
 * 
 * como fechas que no tienen coherencia (por ejemplo, la fecha de fin es anterior a la fecha de inicio).
 * @extends {Error}
 */
export class ErrorRangoDeFechasInvalido extends Error {
    constructor() {
        super("Error entre el rango de fechas")
        this.name = "ErrorRangoDeFechasInvalido"
    }
}

/**
 * Se lanza cuando no se proporciona una fecha de inicio válida al consultar o generar un reporte.
 * 
 * Este error se lanza cuando el usuario intenta consultar actividades o generar un reporte sin haber proporcionado una fecha de inicio válida.
 * 
 * @extends {Error}
 */
export class ErrorFechaDeInicioInvalida extends Error {
    constructor() {
        super("Error debes indicar una fecha de inicio valida")
        this.name = "ErrorFechaDeInicioInvalida"
    }
}


/**
 * Se lanza cuando no se proporciona una fecha de fin válida al consultar o generar un reporte.
 * 
 * Este error se lanza cuando el usuario intenta consultar actividades o generar un reporte sin haber proporcionado una fecha de fin válida.
 * 
 * @extends {Error}
 */
export class ErrorFechaDeFinInvalida extends Error {
    constructor() {
        super("Error Debes indicar una fecha de fin valida")
        this.name = "ErrorFechaDeFinInvalida"
    }
}

//-------------------------//