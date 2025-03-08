import { Actividad } from "../class/Actividad"
import { Supervisor } from "../class/Supervisor"


import { describe, it, expect } from "vitest";


describe("mostrarResumen - Caso de prueba unico", () => {

    it("Caso de prueba unico", () => {
        const supervisor = new Supervisor("Juan Pérez", "juan@email.com", "1234");
        const fechaHora = new Date("2025-03-10T14:30:00"); 
        const actividad = new Actividad(
          fechaHora,
          supervisor,
          "Inspección de seguridad",
          ["informe.pdf"],
          "Carlos López",
          "Soleado"
        );
      
        const resumenEsperado =
          "Fecha y Hora: 2025-03-10 14:30\n" +
          "Supervisor: Juan Pérez\n" +
          "Descripción: Inspección de seguridad\n" +
          "Anexos: informe.pdf\n" +
          "Responsable: Carlos López\n" +
          "Condiciones Climáticas: Soleado";
      
        expect(actividad.mostrarResumen()).toBe(resumenEsperado);
    })
})
