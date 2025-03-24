export class ErrorContraseñaCorta extends Error {
    constructor() {
        super("La contraseña es demasiado corta (mínimo 6 caracteres)");
        this.name = "ErrorContraseñaCorta";
    }
}


export class ErrorContraseñaLarga extends Error {
    constructor() {
        super("La contraseña es demasiado larga (máximo 50 caracteres)");
        this.name = "ErrorContraseñaLarga";
    }
}


export class ErrorEmailLargo extends Error {
    constructor() {
        super("El email es demasiado largo (máximo 50 caracteres)");
        this.name = "ErrorEmailLargo";
    }
}

export class ErrorCampoVacio extends Error {
    constructor() {
        super("El campo de contraseña no puede estar vacío");
        this.name = "ErrorCampoVacio";
    }
}


export class ErrorContraseñaMismaQueLaActual extends Error {
    constructor() {
        super("La contraseña nueva es la misma que la actual")
        this.name = "ErrorContraseñaMismaQueLaActual"
    }
}


export class ErrorEmailRegistrado extends Error {
    constructor() {
        super("Este email ya se encuentra registrado")
        this.name = "ErrorEmailRegistrado"
    }
}


export class ErrorFormatoEmail extends Error {
    constructor() {
        super("El email tiene un formato invalido")
        this.name = "ErrorFormatoEmail"
    }
}







export class ErrorCorreoInvalido extends Error {
    constructor() {
        super("El correo ingresado contiene caracteres no permitidos");
        this.name = "ErrorCorreoInvalido";
    }
}


export class ErrorContraseñaObligatoria extends Error {
    constructor() {
        super("La contraseña es un campo obligatorio");
        this.name = "ErrorContraseñaObligatoria";
    }
}


export class ErrorEmailObligatorio extends Error {
    constructor() {
        super("El correo es un campo obligatorio")
        this.name = "ErrorEmailObligatorio"
    }
}


export class ErrorContraseñaInvalida extends Error {
    constructor() {
        super("La contraseña ingresada contiene caracteres no permitidos");
        this.name = "ErrorContraseñaInvalida";
    }
}

export class ErrorCorreoNoExiste extends Error {
    constructor() {
        super("El correo no existe en la plataforma")
        this.name = "ErrorCorreoNoExiste"
    }
}

export class ErrorContraseñaActualIncorrecta extends Error {
    constructor() {
        super("La contraseña actual es incorrecta")
        this.name = "ErrorContraseñaActualIncorrecta"
    }
}


export class ErrorCuentaBloqueada extends Error {
    constructor() {
        super("Debe esperar, cuenta bloqueada")
        this.name = "ErrorCuentaBloqueada"
    }
}