/**
 * Representa a un supervisor en el sistema.
 * 
 * Esta clase almacena los datos personales y la cantidad de intentos fallidos de inicio de sesión de un supervisor.
 */
export class Supervisor {

    /**
     * Crea una instancia de la clase Supervisor.
     * 
     * @param {string} nombre - El nombre del supervisor.
     * @param {string} email - El correo electrónico del supervisor.
     * @param {string} contraseña - La contraseña del supervisor.
     */
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
        this.intentosFallidos = 0 
    }
}