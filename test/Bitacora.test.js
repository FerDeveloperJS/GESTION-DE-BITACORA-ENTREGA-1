import {
    ErrorFechaMuyFutura,
    ErrorDescripcionInvalida,
    ErrorFechaPasada,
    ErrorSupervisorInvalido,
    ErrorResponsableInvalido,
    ErrorActividadesDespuesDe1Semana,
    ErrorRangoDeFechasInvalido,
    ErrorFechaDeInicioInvalida,
    ErrorFechaDeFinInvalida,
    ErrorFechaMuyFutura
} from "../excepciones/Bitacora_excepciones.js"


import { Bitacora } from "../class/Bitacora.js"
import { Actividad } from "../class/Actividad.js"
import { Supervisor } from "../class/Supervisor.js"

import { describe, it, expect } from "vitest"




describe("registrarActividad-Casos_normales", () => {
    it("Caso normal #1: La actividad se registra exitosamente en actividades de Bitácora.", () => {
    
        const bitacora = new Bitacora();
        const supervisor = new Supervisor("Supervisor1", "supervisor1@email.com", "password123");
        const actividad = new Actividad(
            "2025-03-07T10:00:00",
            supervisor,
            "Inspección de seguridad",
            true,
            "Responsable1",
            "Soleado, 25°C"
        )

        const resultado = bitacora.registrarActividad(actividad);

        expect(resultado).toBe(true);

    })


    it("Caso normal #2: La actividad se registra exitosamente en actividades de Bitácora.", () => {
        
        const bitacora = new Bitacora()
        const supervisor = new Supervisor("Supervisor2", "supervisor2@email.com", "password456")
        const actividad = new Actividad(
            "2025-03-07 14:30",
            supervisor,
            "Mantenimiento preventivo",
            true, 
            "Responsable2",
            "Nublado, 20°C"
        );

        const resultado = bitacora.registrarActividad(actividad);

        expect(resultado).toBe(true);
    })


    it("Caso normal #3: La actividad se registra exitosamente en actividades de Bitácora", () => {

        const bitacora = new Bitacora()
        const supervisor = new Supervisor("Supervisor3", "supervisor3@email.com", "password789")
        const actividad = new Actividad(
            "2025-03-08 08:00",
            supervisor,
            "Revisión de equipos",
            true, 
            "Responsable3",
            "Lluvioso, 18°C"
        )

        const resultado = bitacora.registrarActividad(actividad)

        expect(resultado).toBe(true)
    })
})





describe("registrarActividad - Casos extremos", () => {
    it("Caso extremo #1: No se puede establecer una fecha futura, solo hasta el dia de hoy.", () => {
        
        const bitacora = new Bitacora("2025-03-22")
        const supervisor = new Supervisor("Supervisor1", "supervisor1@email.com", "password123")
        const actividad = new Actividad(
            "2075-01-01 12:00", 
            supervisor,
            "Inspección de emergencia",
            true,
            "Responsable4",
            "Desconocido"
        );

        

        expect(() => bitacora.registrarActividad(actividad)).toThrow(ErrorFechaMuyFutura)
    })



    it("Caso extremo #2: Debes modificar la descripcion de esta actividad, caracteres maximos(3,000)", () => {

        const bitacora = new Bitacora()
        const supervisor = new Supervisor("Supervisor2", "supervisor2@email.com", "password456")
        const descripcionLarga = "a".repeat(3001)
        const actividad = new Actividad(
            "2025-03-07 11:00",
            supervisor,
            descripcionLarga,
            true,
            "Responsable5",
            "Soleado, 27°C"
        );

        expect(() => bitacora.registrarActividad(actividad)).toThrow(ErrorDescripcionInvalida)
      
    })

})




describe("registrarActividad - Casos de error", () => {
    it("Caso de error #1: No se puede crear una activididad, porque no existe un supervisor.", () => {
        const bitacora = new Bitacora();
        const actividad = new Actividad(
            "2025-03-07 09:30",
            null, 
            "Revisión de equipos",
            true,
            "Responsable7",
            "Soleado, 22°C"
        );

        expect(() => bitacora.registrarActividad(actividad)).toThrow(ErrorSupervisorInvalido)
        
    })


    it("Caso de error #2: No se puede crear una actividad sin descripción", () => {
        const bitacora = new Bitacora();
        const supervisor = new Supervisor("Supervisor1", "supervisor1@email.com", "password123");
        const actividad = new Actividad(
            "2025-03-07 13:45",
            supervisor,
            "", 
            true,
            "Responsable8",
            "Lluvioso, 19°C"
        );

        

        expect(() => bitacora.registrarActividad(actividad)).toThrow(ErrorDescripcionInvalida)
    })



    it("Caso de error #3: No se puede crear una actividad sin responsable", () => {
        const bitacora = new Bitacora()
        const supervisor = new Supervisor("Supervisor3", "supervisor3@email.com", "password789")
        const actividad = new Actividad(
            "2025-03-07 15:00",
            supervisor,
            "Verificación de protocolos",
            true,
            "", 
            "Soleado, 24°C"
        );


        expect(() => bitacora.registrarActividad(actividad)).toThrow(ErrorResponsableInvalido)

    })
})





describe("consultarActividad - Casos normales", () => {
    it("Caso normal #1: Se listan todas las actividades entre 1 y 7 de marzo del 2025", () => {
        const bitacora = new Bitacora();
        const supervisorA = new Supervisor("Juan Pérez", "juan@example.com", "password123")
        const supervisorB = new Supervisor("Ana Gómez", "ana@example.com", "password456")
        const supervisorC = new Supervisor("Carlos Ruiz", "carlos@example.com", "password789")

        bitacora.registrarActividad(new Actividad("2025-03-01", supervisorA, "Descripción 1"))
        bitacora.registrarActividad(new Actividad("2025-03-05", supervisorB, "Descripción 2"))
        bitacora.registrarActividad(new Actividad("2025-03-07", supervisorC, "Descripción 3"))

        const resultado = bitacora.consultarActividades("2025-03-01", "2025-03-07")

        expect(resultado).toEqual([
            expect.objectContaining({ fechaHora: "2025-03-01", supervisor: supervisorA, descripcion: "Descripción 1" }),
            expect.objectContaining({ fechaHora: "2025-03-05", supervisor: supervisorB, descripcion: "Descripción 2" }),
            expect.objectContaining({ fechaHora: "2025-03-07", supervisor: supervisorC, descripcion: "Descripción 3" })
        ])
    })

    it("Caso normal #2: Se muestra la lista de actividades del 5 de marzo de 2025", () => {
        const bitacora = new Bitacora();
        const supervisor = new Supervisor("Luis Martínez", "luis@example.com", "password789")

        bitacora.registrarActividad(new Actividad("2025-03-05", supervisor, "Descripción única"))

        const resultado = bitacora.consultarActividades("2025-03-05", "2025-03-05")

        expect(resultado).toEqual([
            expect.objectContaining({ fechaHora: "2025-03-05", supervisor: supervisor, descripcion: "Descripción única" })
        ])
    })

    it("Caso normal #3: Se listan todas las actividades entre 1 y 2 de marzo de 2025", () => {
        const bitacora = new Bitacora()
        const supervisorA = new Supervisor("Pedro Ramírez", "pedro@example.com", "password123")
        const supervisorB = new Supervisor("Marta Díaz", "marta@example.com", "password456")

        bitacora.registrarActividad(new Actividad("2025-03-01", supervisorA, "Descripción 1"))
        bitacora.registrarActividad(new Actividad("2025-03-02", supervisorB, "Descripción 2"))

        const resultado = bitacora.consultarActividades("2025-03-01", "2025-03-02")

        expect(resultado).toEqual([
            expect.objectContaining({ fechaHora: "2025-03-01", supervisor: supervisorA, descripcion: "Descripción 1" }),
            expect.objectContaining({ fechaHora: "2025-03-02", supervisor: supervisorB, descripcion: "Descripción 2" })
        ])
    })
})




describe("consultarActividad - Casos extremos", () => {
    it("Caso extremo #1: No se pueden listar actividades más alla de una semana", () => {
        const bitacora = new Bitacora()
        
        expect(() => bitacora.consultarActividades("2025-03-01", "2025-03-09")).toThrow(ErrorFechaDeFinInvalida)
    })


    it("Caso extremo #2: Error por rango de fechas inválido", () => {
        const bitacora = new Bitacora()
        
        expect(() => bitacora.consultarActividades("2025-03-14", "2025-03-11")).toThrow(ErrorRangoDeFechasInvalido)
    })


    it("Caso extremo #3: No se puede consultar actividades con fechas futuras", () => {
        const bitacora = new Bitacora("2025-01-20");
        
        expect(() => bitacora.consultarActividades("2025-02-20", "2025-02-27")).toThrow(ErrorFechaMuyFutura)
    })


})




describe("consultarActividad - Casos de error", () => {
    it("Caso de error #1: Debes indicar una fecha de fin", () => {
        const bitacora = new Bitacora()

        expect(() => bitacora.consultarActividades("2025-03-01", undefined)).toThrow(ErrorFechaDeFinInvalida)
    })


    it("Caso de error #2: Debes indicar una fecha de inicio", () => {
        const bitacora = new Bitacora()

        expect(() => bitacora.consultarActividades(undefined, "2025-03-07")).toThrow(ErrorFechaDeInicioInvalida);
    })


    it("Caso de error #3: Debes indicar una fecha de inicio y una fecha de fin", () => {
        const bitacora = new Bitacora()

        expect(() => bitacora.consultarActividades(undefined, undefined)).toThrow(ErrorRangoDeFechasInvalido)
    })
})





describe("generarReporte - Casos normales", () => {
    it("Caso normal #1: Genera un reporte en PDF de un periodo valido", () => {
        const bitacora = new Bitacora("2025-03-07")


        const supervisor = new Supervisor("Supervisor1", "supervisor1@email.com", "password123");
        const actividad = new Actividad(
            "2025-03-03T10:00:00",
            supervisor,
            "Inspección de seguridad",
            true,
            "Responsable1",
            "Soleado, 25°C"
        )


        const supervisor2 = new Supervisor("Supervisor2", "supervisor2@email.com", "password124");
        const actividad2 = new Actividad(
            "2025-03-05T10:00:00",
            supervisor2,
            "Mantenimiento de equipos",
            true,
            "Responsable1",
            "Soleado, 25°C"
        )


        

        bitacora.registrarActividad(actividad);
        bitacora.registrarActividad(actividad2)


        expect(bitacora.generarReporte("2025-03-01", "2025-03-07")).toBe(true)
    })


    it("Caso normal #2: Genera un reporte en PDF de un solo día", () => {
        const bitacora = new Bitacora("2025-03-07")


        const supervisor = new Supervisor("Supervisor1", "supervisor1@email.com", "password123");
        const actividad = new Actividad(
            "2025-03-03T10:00:00",
            supervisor,
            "Capacitación",
            true,
            "Responsable1",
            "Soleado, 25°C"
        )

        bitacora.registrarActividad(actividad)

        
        expect(bitacora.generarReporte("2025-03-03", "2025-03-07")).toBe(true)
    })


    it("Caso normal #3: Genera un reporte en PDF de otro día válido", () => {
        const bitacora = new Bitacora("2025-03-25")


        const supervisor = new Supervisor("Supervisor1", "supervisor1@email.com", "password123");
        const actividad = new Actividad(
            "2025-03-23T10:00:00",
            supervisor,
            "Auditoría interna",
            true,
            "Responsable1",
            "Soleado, 25°C"
        )

        bitacora.registrarActividad(actividad)


        expect(bitacora.generarReporte("2025-03-23", "2025-03-25")).toBe(true)
    })
})




describe("generarReporte - Casos extremos", () => {
    it("Caso extremo #1: No se puede generar reporte de actividades más alla de una semana", () => {
        const bitacora = new Bitacora("2025-03-10")
        expect(() => bitacora.generarReporte("2025-03-01", "2025-03-09")).toThrow(ErrorFechaDeFinInvalida)
    })

    it("Caso extremo #2: No se puede generar reporte de actividades porque hay un error entre el rango de fechas", () => {
        const bitacora = new Bitacora()
        expect(() => bitacora.generarReporte("2025-03-14", "2025-03-11")).toThrow(ErrorRangoDeFechasInvalido);
    })


  
    it("Caso extremo #3: No se puede generar un reporte con fechas futuras", () => {
        const bitacora = new Bitacora("2025-03-10");
        expect(() => bitacora.generarReporte("2025-03-11", "2025-03-12")).toThrow(ErrorFechaMuyFutura);
    });

})





describe("generarReporte - Casos de error", () => {
    it("Caso de error #1: Debes indicar una fecha de inicio.", () => {
        const bitacora = new Bitacora()
        expect(() => bitacora.generarReporte(null, "2025-03-08")).toThrow(ErrorFechaDeInicioInvalida)
    })


    it("Caso de error #2: Debes indicar una fecha de fin.", () => {
        const bitacora = new Bitacora()
        expect(() => bitacora.generarReporte("2025-03-01", null)).toThrow(ErrorFechaDeFinInvalida)
    })


    it("Caso de error #3: Campos de fecha de inicio y fecha fin son obligatorios.", () => {
        const bitacora = new Bitacora()
        expect(() => bitacora.generarReporte(null, null)).toThrow(ErrorRangoDeFechasInvalido)
    })
})