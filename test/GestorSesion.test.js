import {
    ErrorContraseñaCorta,
    ErrorContraseñaLarga,
    ErrorEmailLargo,
    ErrorCampoVacio,
    ErrorFormatoEmail,
    ErrorContraseñaObligatoria,
    ErrorEmailRegistrado,
    ErrorCorreoInvalido,
    ErrorContraseñaInvalida,
    ErrorCorreoNoExiste,
    ErrorEmailObligatorio,
    ErrorContraseñaMismaQueLaActual,
    ErrorContraseñaActualIncorrecta,
    ErrorCuentaBloqueada
    
} from "../excepciones/GestorSesion_excepciones.js"


import { GestorSesion } from "../class/GestorSesion.js"

import { describe, it, expect } from "vitest"


describe("registrarse - Casos normales", () => {
    it("Caso normal #1: Registro exitoso", () => {
        const gestor = new GestorSesion()

        const Usuario = gestor.registrarse("Juan", "juan@example.com", "Segura123")
        expect(Usuario).toBe(true)
        
    })

    it("Caso normal #2: Registro exitoso con email en mayúsculas", () => {
        const gestor = new GestorSesion()

        const Usuario = gestor.registrarse("Ana", "ANA.LOPEZ@EXAMPLE.COM", "Clave1234")
        
        expect(Usuario).toBe(true)
    })


    it("Caso normal #3: Registro exitoso con contraseña larga", () => {
        const gestor = new GestorSesion()
        const Usuario = gestor.registrarse("Carlos", "carlos@example.com", "Carlos123456789")
        
        expect(Usuario).toBe(true)
    })
})






describe("registrarse - Casos extremos", () => {
    it("Caso extremo #1: Contraseña muy débil (menos de 6 caracteres)", () => {
        const gestor = new GestorSesion()
        
        expect(() => gestor.registrarse("Pepe", "pepe@example.com", "pepe4")).toThrow(ErrorContraseñaCorta)
    })



    it("Caso extremo #2: Contraseña demasiado larga (más de 50 caracteres)", () => {
        const gestor = new GestorSesion()
    
        
        expect(() => gestor.registrarse("Julian", "julian@example.com", "pepeX7#vM9qLp2@tZfW8kB3sRjYD5Nc6gHTA!d4CmVu123456789")).toThrow(ErrorContraseñaLarga)
    })



    it("Caso extremo #3: Email demasiado largo (más de 50 caracteres)", () => {
        const gestor = new GestorSesion()
        
        
        expect(() => gestor.registrarse("Matias", "Matias_X91yZ7mTqLp21@superlongemaildomaindomain.com", "juli1234")).toThrow(ErrorEmailLargo)
    })

})



describe("registrarse - Casos de error", () => {
    it("Caso de error #1: Email ya registrado", () => {
        const gestor = new GestorSesion()
        gestor.registrarse("María", "maria@example.com", "maria456")

        expect(() => gestor.registrarse("María", "maria@example.com", "maria456")).toThrow(ErrorEmailRegistrado)
    });

    it("Caso de error #2: Campo de contraseña vacío", () => {
        const gestor = new GestorSesion()

        expect(() => gestor.registrarse("Sofía", "sofia@example.com", "")).toThrow(ErrorCampoVacio)
    })

    it("Caso de error #3: Email con formato inválido", () => {
        const gestor = new GestorSesion()

        expect(() => gestor.registrarse("Roberto", "roberto.example.com", "Roberto123")).toThrow(ErrorFormatoEmail)
    })
})





describe("iniciarSesion - Casos normales", () => {
    it("Caso normal #1: Inicio de sesión exitoso con email en minúsculas", () => {
        const gestor = new GestorSesion()
        gestor.registrarse("Usuario1", "usuario1@outlook.com", "Contraseña123")

        const Usuario = gestor.iniciarSesion("usuario1@outlook.com", "Contraseña123")
        expect(Usuario).toBe(true)
    })


    it("Caso normal #2: Contraseña incorrecta", () => {
        const gestor = new GestorSesion();
        gestor.registrarse("Sebastian", "soysebastian@gmail.com", "ClaveCorrecta123")

        const Usuario = gestor.iniciarSesion("soysebastian@gmail.com", "Soysebas123")
        expect(Usuario).toBe(false)
    })


    it("Caso normal #3: Inicio de sesión con email en mayúsculas", () => {
        const gestor = new GestorSesion()
        gestor.registrarse("Usuario123", "usuario123@gmail.com", "Contraseña1222")

        const Usuario = gestor.iniciarSesion("USUARIO123@GMAIL.COM", "Contraseña1222")
        expect(Usuario).toBe(true)
    })

})




describe("iniciarSesion - Casos extremos", () => {
    it("Caso extremo #1: Correo con caracteres especiales", () => {
        const gestor = new GestorSesion()
        expect(() => gestor.iniciarSesion("lucas🚀@gmail.com", "lucas12345")).toThrow(ErrorCorreoInvalido)
    })


    it("Caso extremo #2: Contraseña con caracteres especiales", () => {
        const gestor = new GestorSesion()
        expect(() => gestor.iniciarSesion("lucas@gmail.com", "lucas12345🚀")).toThrow(ErrorContraseñaInvalida)
    })


    it("Caso extremo #3: Bloqueo tras intentos fallidos", () => {
        const gestor = new GestorSesion()
        gestor.registrarse("Lucas", "lucas@gmail.com", "Lucas1234")

    
        for (let i = 0; i < 9; i++) {
            expect(gestor.iniciarSesion("lucas@gmail.com", "wrong123")).toBe(false)
        }

    

        expect(() => gestor.iniciarSesion("lucas@gmail.com", "Lucas1234")).toThrow(ErrorCuentaBloqueada)
    })
})


describe("iniciarSesion - Casos de error", () => {
    it("Caso de error #1: La contraseña es obligatoria", () => {
        const gestor = new GestorSesion()
        gestor.registrarse("Luciana", "luciana@gmail.com", "claveSegura123")

        expect(() => gestor.iniciarSesion("luciana@gmail.com", "")).toThrow(ErrorContraseñaObligatoria)
    })

    it("Caso de error #2: El correo no existe en la base de datos", () => {
        const gestor = new GestorSesion();

        expect(() => gestor.iniciarSesion("soypepito@gmail.com", "pepito123")).toThrow(ErrorCorreoNoExiste);
    })


    it("Caso de error #3: El email es obligatorio", () => {
        const gestor = new GestorSesion()

        expect(() => gestor.iniciarSesion("", "hola1234")).toThrow(ErrorEmailObligatorio)
    })
})



describe("cambiarContraseña - Casos normales", () => {
    it("Caso normal #1: Cambio de contraseña exitoso", () => {
        const gestor = new GestorSesion()

    
        gestor.registrarse("Lucas", "lucas@gmail.com" , "ClaveActual!123")
        gestor.cambiarContraseña("lucas@gmail.com", "ClaveActual!123", "NuevaClave123")
    
        const sesionNueva = gestor.iniciarSesion("lucas@gmail.com", "NuevaClave123")
        const sesionAntigua = gestor.iniciarSesion("lucas@gmail.com", "ClaveActual!123")
    
        expect(sesionNueva).toBe(true)
        expect(sesionAntigua).toBe(false)
    })


    it("Caso normal #2: Cambio de contraseña exitoso", () => {
        const gestor = new GestorSesion();

    
        gestor.registrarse("Blandon", "blandon@gmail.com", "blandon123")
        gestor.cambiarContraseña("blandon@gmail.com", "blandon123", "Blandon456*")
    
        const sesionNueva = gestor.iniciarSesion("blandon@gmail.com", "Blandon456*")
        const sesionAntigua = gestor.iniciarSesion("blandon@gmail.com", "blandon123")
    
        expect(sesionNueva).toBe(true)
        expect(sesionAntigua).toBe(false)
    })


    it("Caso normal #3: Cambio de contraseña exitoso", () => {
        const gestor = new GestorSesion()

    
        gestor.registrarse("Maria", "maria@gmail.com", "maria123")
        gestor.cambiarContraseña("maria@gmail.com", "maria123", "Maria90456*")
    
        const sesionNueva = gestor.iniciarSesion("maria@gmail.com", "Maria90456*")
        const sesionAntigua = gestor.iniciarSesion("maria@gmail.com", "maria123")
    
        expect(sesionNueva).toBe(true)
        expect(sesionAntigua).toBe(false)
    })

})


describe("cambiarContraseña - Casos extremos", () => {
    it("Caso extremo #1: Contraseña muy débil (menos de 6 caracteres)", () => {
        const gestor = new GestorSesion()
    
        gestor.registrarse("Pepe", "pepe@gmail.com", "pepe12")
    
        expect(() => gestor.cambiarContraseña("pepe@gmail.com", "pepe12", "pepe4")).toThrow(ErrorContraseñaCorta)
    })


    it("Caso extremo #2: Contraseña demasiado larga (más de 50 caracteres)", () => {
        const gestor = new GestorSesion();
    
        gestor.registrarse("Julian", "julian@gmail.com", "juli121")
    
        expect(() => gestor.cambiarContraseña("julian@gmail.com", "juli121", "juliaX7#vM9qLp2@tZW8kB3sRjYD5Nc6gHTA!d4CmVu234567891")).toThrow(ErrorContraseñaLarga)
    })


    it("Caso extremo #3: La nueva contraseña es la misma que la actual", () => {
        const gestor = new GestorSesion();
    
        gestor.registrarse("Luna", "luna@gmail.com", "luna12");
    
        expect(() => gestor.cambiarContraseña("luna@gmail.com", "luna12", "luna12")).toThrow(ErrorContraseñaMismaQueLaActual)
    })

})


describe("cambiarContraseña - Casos de error", () => {
    it("Caso de error #1: Campo de nueva contraseña vacia", () => {
        const gestor = new GestorSesion()
    
        gestor.registrarse("Lucas", "lucas@gmail.com", "ClaveActual!123")
    
        expect(() => gestor.cambiarContraseña("lucas@gmail.com", "ClaveActual!123", "")).toThrow(ErrorCampoVacio)
    })

    it("Caso de error #2: La contraseña actual es incorrecta", () => {
        const gestor = new GestorSesion()
    
        gestor.registrarse("Matias", "matias@gmail.com", "ClaveActual9090")
    
        expect(() => gestor.cambiarContraseña("matias@gmail.com", "ClaveActual90901", "ClaveNueva123")).toThrow(ErrorContraseñaActualIncorrecta)
    })


    it("Caso de error #3: Correo Inexistente", () => {
        const gestor = new GestorSesion()
    
        gestor.registrarse("Matias", "lucho1@gmail.com", "ClaveActual230")
    
        expect(() => gestor.cambiarContraseña("lucho@gmail.com", "ClaveActual230", "luchoX7#vM9qLp2@tZfW8kB3sRjYD5Nc6gHTA!d4CmVu")).toThrow(ErrorCorreoNoExiste)
    })

})