/**
 * Error lanzado cuando la contraseña es demasiado corta.
 * 
 * Este error se lanza durante el proceso de validación de la contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrar o actualizar una contraseña que tiene menos de 6 caracteres.
 * 
 * @extends Error
 */
export class ErrorContraseñaCorta extends Error {
    constructor() {
        super("La contraseña es demasiado corta (mínimo 6 caracteres)");
        this.name = "ErrorContraseñaCorta";
    }
}



/**
 * Error lanzado cuando la contraseña es demasiado larga.
 * 
 * Este error se lanza durante el proceso de validación de la contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrar o actualizar una contraseña que excede los 50 caracteres.
 * 
 * @extends Error
 */
export class ErrorContraseñaLarga extends Error {
    constructor() {
        super("La contraseña es demasiado larga (máximo 50 caracteres)");
        this.name = "ErrorContraseñaLarga";
    }
}



/**
 * Error lanzado cuando el email excede el límite de longitud permitido.
 * 
 * Este error se lanza durante el proceso de validación del email en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrar email que tiene más de 50 caracteres.
 * 
 * @extends Error
 */
export class ErrorEmailLargo extends Error {
    constructor() {
        super("El email es demasiado largo (máximo 50 caracteres)");
        this.name = "ErrorEmailLargo";
    }
}


/**
 * Error lanzado cuando el campo de contraseña está vacío.
 * 
 * Este error se lanza durante el proceso de validación de la contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrarse o iniciar sesion con una contraseña vacía.
 * 
 * @extends Error
 */
export class ErrorCampoVacio extends Error {
    constructor() {
        super("El campo de contraseña no puede estar vacío");
        this.name = "ErrorCampoVacio";
    }
}

/**
 * Error lanzado cuando la nueva contraseña es la misma que la actual.
 * 
 * Este error se lanza durante el proceso de cambio de contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta establecer una nueva contraseña que es exactamente igual 
 * a la que ya tiene registrada actualmente.
 * 
 * @extends Error
 */
export class ErrorContraseñaMismaQueLaActual extends Error {
    constructor() {
        super("La contraseña nueva es la misma que la actual")
        this.name = "ErrorContraseñaMismaQueLaActual"
    }
}


/**
 * Error lanzado cuando el email ya está registrado en el sistema.
 * 
 * Este error se lanza durante el proceso de registro de usuario en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrar un email que ya está en uso por otro usuario.
 * 
 * @extends Error
 */
export class ErrorEmailRegistrado extends Error {
    constructor() {
        super("Este email ya se encuentra registrado")
        this.name = "ErrorEmailRegistrado"
    }
}


/**
 * Error lanzado cuando el formato del email es inválido.
 * 
 * Este error se lanza durante el proceso de validación del email en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrar un email que no cumple con el formato estándar.
 * 
 * @extends Error
 */
export class ErrorFormatoEmail extends Error {
    constructor() {
        super("El email tiene un formato invalido")
        this.name = "ErrorFormatoEmail"
    }
}



/**
 * Error lanzado cuando el correo ingresado contiene caracteres no permitidos.
 * 
 * Este error se lanza durante el proceso de validación del correo en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta ingresar un correo que contiene caracteres no válidos o especiales.
 * 
 * @extends Error
 */
export class ErrorCorreoInvalido extends Error {
    constructor() {
        super("El correo ingresado contiene caracteres no permitidos");
        this.name = "ErrorCorreoInvalido";
    }
}


/**
 * Error lanzado cuando la contraseña es un campo obligatorio pero está vacía.
 * 
 * Este error se lanza durante el proceso de registro o cambio de contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario no proporciona una contraseña cuando se requiere.
 * 
 * @extends Error
 */
export class ErrorContraseñaObligatoria extends Error {
    constructor() {
        super("La contraseña es un campo obligatorio");
        this.name = "ErrorContraseñaObligatoria";
    }
}


/**
 * Error lanzado cuando el correo es un campo obligatorio pero está vacío.
 * 
 * Este error se lanza durante el proceso de registro o actualización de la cuenta en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario no proporciona un correo cuando se requiere.
 * 
 * @extends Error
 */
export class ErrorEmailObligatorio extends Error {
    constructor() {
        super("El correo es un campo obligatorio")
        this.name = "ErrorEmailObligatorio"
    }
}


/**
 * Error lanzado cuando la contraseña contiene caracteres no permitidos.
 * 
 * Este error se lanza durante el proceso de validación de la contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta registrar o actualizar una contraseña que contiene caracteres no válidos.
 * 
 * @extends Error
 */
export class ErrorContraseñaInvalida extends Error {
    constructor() {
        super("La contraseña ingresada contiene caracteres no permitidos");
        this.name = "ErrorContraseñaInvalida";
    }
}


/**
 * Error lanzado cuando el correo no existe en la plataforma.
 * 
 * Este error se lanza durante el proceso de inicio de sesión en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta iniciar sesión con un correo que no está registrado en la plataforma.
 * 
 * @extends Error
 */
export class ErrorCorreoNoExiste extends Error {
    constructor() {
        super("El correo no existe en la plataforma")
        this.name = "ErrorCorreoNoExiste"
    }
}


/**
 * Error lanzado cuando la contraseña actual es incorrecta.
 * 
 * Este error se lanza durante el proceso de cambio de contraseña en el módulo de gestión de sesión,
 * 
 * específicamente cuando el usuario intenta cambiar su contraseña pero proporciona una contraseña actual incorrecta.
 * 
 * @extends Error
 */
export class ErrorContraseñaActualIncorrecta extends Error {
    constructor() {
        super("La contraseña actual es incorrecta")
        this.name = "ErrorContraseñaActualIncorrecta"
    }
}


/**
 * Error lanzado cuando la cuenta del usuario está bloqueada.
 * 
 * Este error se lanza cuando el usuario intenta acceder a su cuenta después de múltiples intentos fallidos de inicio de sesión,
 * 
 * indicando que la cuenta está bloqueada temporalmente debido a intentos fallidos excesivos.
 *
 * @extends Error
 */
export class ErrorCuentaBloqueada extends Error {
    constructor() {
        super("Debe esperar, cuenta bloqueada")
        this.name = "ErrorCuentaBloqueada"
    }
}