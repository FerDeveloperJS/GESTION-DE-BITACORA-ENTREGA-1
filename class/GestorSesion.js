import {
    ErrorContraseñaCorta,
    ErrorContraseñaLarga,
    ErrorEmailLargo,
    ErrorCampoVacio,
    ErrorContraseñaObligatoria,
    ErrorEmailRegistrado,
    ErrorCorreoInvalido,
    ErrorContraseñaInvalida,
    ErrorCorreoNoExiste,
    ErrorEmailObligatorio,
    ErrorContraseñaMismaQueLaActual,
    ErrorContraseñaActualIncorrecta,
    ErrorCuentaBloqueada,
    ErrorFormatoEmail

} from "../excepciones/GestorSesion_excepciones.js"

import { Supervisor } from "../class/Supervisor.js"

/**
 * Clase encargada de gestionar el inicio de sesión, el registro de usuarios y el cambio de contraseña.
 */
export class GestorSesion {
    constructor() {
        

        /**
         * Lista de usuarios registrados.
         * 
         * @type {Array<Supervisor>}
         */
         
        
        this.usuarios = []





        /**
         * Mapa que almacena la cantidad de intentos fallidos por email.
         * @type {Object<string, number>}
         */
        this.intentosFallidos = {}
        
    }


    /**
     * Inicia sesión con un correo y contraseña.
     * Valida el formato del correo y contraseña, verifica la existencia del usuario y controla los intentos fallidos.
     * 
     * @param {string} email - Correo del usuario.
     * @param {string} contraseña - Contraseña del usuario.
     * @returns {boolean} `true` si las credenciales son correctas, `false` si la contraseña es incorrecta.
     * @throws {ErrorEmailObligatorio|ErrorContraseñaObligatoria|ErrorCorreoInvalido|ErrorContraseñaInvalida|ErrorCorreoNoExiste|ErrorCuentaBloqueada}
     */
    iniciarSesion(email, contraseña)  {


        if (email === "") {
            throw new ErrorEmailObligatorio()
        }

        if (contraseña === "") {
            throw new ErrorContraseñaObligatoria();
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^[\p{L}\p{N}!@#$%^&*()\-_+=<>,.?;:{}[\]"]{6,50}$/u;


        if (!emailRegex.test(email)) {
            throw new ErrorCorreoInvalido();
        }

        if (!passwordRegex.test(contraseña)) {
            throw new ErrorContraseñaInvalida();
        }

        email = email.toLowerCase()


        const usuario = this.usuarios.find(usuario => usuario.email === email);
        if (!usuario) throw new ErrorCorreoNoExiste();


        
        if (!this.intentosFallidos[email]) {
            this.intentosFallidos[email] = 0;
        }

        
        
        if (this.intentosFallidos[email] >= 9) {
            throw new ErrorCuentaBloqueada();
        }

        if (usuario.contraseña !== contraseña) {
            this.intentosFallidos[email]++
            console.log(`Intento fallido para ${email}: ${this.intentosFallidos[email]}`)

            return false;
        }

        this.intentosFallidos[email] = 0
        return true;

    }


    /**
     * Registra un nuevo usuario como Supervisor.
     * Valida el correo y contraseña antes de registrar.
     * 
     * @param {string} nombre - Nombre del nuevo usuario.
     * @param {string} email - Correo del nuevo usuario.
     * @param {string} contraseña - Contraseña del nuevo usuario.
     * @returns {boolean} `true` si el registro fue exitoso.
     * @throws {ErrorEmailRegistrado|ErrorCampoVacio|ErrorContraseñaCorta|ErrorContraseñaLarga|ErrorEmailLargo|ErrorFormatoEmail}
     */
    registrarse(nombre, email, contraseña) {

        email = email.toLowerCase()

     
        if (this.usuarios.find(usuario => usuario.email === email)) {
            throw new ErrorEmailRegistrado();
        }

        if (contraseña === "") {
            throw new ErrorCampoVacio()
        }

        if (contraseña.length < 6) {
            throw new ErrorContraseñaCorta()
        }

        if (contraseña.length > 50) {
            throw new ErrorContraseñaLarga()
        }


        if (email.length > 50) {
            throw new ErrorEmailLargo()
        }



        if (!email.includes("@")) {
            throw new ErrorFormatoEmail()
        }

        this.usuarios.push(new Supervisor(nombre, email, contraseña))


        return true
    }



    /**
     * Cambia la contraseña de un usuario existente.
     * Verifica que el correo exista y que la contraseña anterior sea correcta.
     * 
     * @param {string} email - Correo del usuario.
     * @param {string} contraseña - Contraseña actual del usuario.
     * @param {string} nuevaContraseña - Nueva contraseña a establecer.
     * @returns {boolean} `true` si el cambio fue exitoso.
     * @throws {ErrorCampoVacio|ErrorContraseñaMismaQueLaActual|ErrorContraseñaCorta|ErrorContraseñaLarga|ErrorContraseñaActualIncorrecta|ErrorCorreoNoExiste}
     */
    cambiarContraseña(email, contraseña, nuevaContraseña) {
        email = email.toLowerCase()

        if (nuevaContraseña === "") {
            throw new ErrorCampoVacio()
        }

        if (contraseña === nuevaContraseña) {
            throw new ErrorContraseñaMismaQueLaActual()
        }

        if (nuevaContraseña.length < 6) {
            throw new ErrorContraseñaCorta()
        }

        if (nuevaContraseña.length > 50) {
            throw new ErrorContraseñaLarga()
        }

        let usuarioEncontrado = false;

        this.usuarios.forEach(usuario => {
            if (usuario.email === email) {
                usuarioEncontrado = true
                if (usuario.contraseña !== contraseña) {
                    throw new ErrorContraseñaActualIncorrecta()
                }
                usuario.contraseña = nuevaContraseña;
            }
        });
    
        if (!usuarioEncontrado) {
            throw new ErrorCorreoNoExiste()
        }
    
        return true
    }

}



