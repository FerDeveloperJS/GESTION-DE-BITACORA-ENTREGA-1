export class Supervisor {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
        this.intentosFallidos = 0
    }
}