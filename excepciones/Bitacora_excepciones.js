// EXEPCIONES PARA LA FUNCIONALIDAD REGISTRAR ACTIVIDAD

export class ErrorFechaMuyFutura extends Error {
    constructor() {
        super("No se puede registrar una actividad con una fecha muy futura.")
        this.name = "ErrorFechaMuyFutura"
    }
}


export class ErrorDescripcionInvalida extends Error {
    constructor() {
        super("La descripción de la actividad no puede superar los 3000 caracteres y no puede estar vacia.");
        this.name = "ErrorDescripcionInvalida";
    }
}


export class ErrorSupervisorInvalido extends Error {
    constructor() {
        super("No se puede registrar una actividad sin un supervisor válido.");
        this.name = "ErrorSupervisorInvalido";
    }
}

export class ErrorResponsableInvalido extends Error {
    constructor() {
        super("No se puede registrar una actividad sin un responsable válido.");
        this.name = "ErrorResponsableInvalido";
    }
}

export class ErrorFechaPasada extends Error {
    constructor() {
        super("No se puede registrar una actividad ya pasada 1 semana")
        this.name = "ErrorFechaPesada"
    }
}





export class ErrorActividadesDespuesDe1Semana extends Error {
    constructor() {
        super("No se pueden listar actividades mas alla de una semana")
        this.name = "ErrorActividadDespuesDe1Semana"
    }
}


export class ErrorRangoDeFechasInvalido extends Error {
    constructor() {
        super("Error entre el rango de fechas")
        this.name = "ErrorRangoDeFechasInvalido"
    }
}


export class ErrorFechaDeInicioInvalida extends Error {
    constructor() {
        super("Error debes indicar una fecha de inicio valida")
        this.name = "ErrorFechaDeInicioInvalida"
    }
}


export class ErrorFechaDeFinInvalida extends Error {
    constructor() {
        super("Error Debes indicar una fecha de fin valida")
        this.name = "ErrorFechaDeFinInvalida"
    }
}

//-------------------------//