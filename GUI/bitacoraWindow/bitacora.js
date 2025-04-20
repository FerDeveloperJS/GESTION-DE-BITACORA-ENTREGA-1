
import { Bitacora } from "../../class/Bitacora.js"
import { Actividad } from "../../class/Actividad.js";

const bitacora = new Bitacora()


function mostrarActividades(actividades) {
    const contenedor = document.getElementById("resultado_consulta");
    contenedor.innerHTML = "";
  
    if (actividades.length === 0) {
      contenedor.innerHTML = "<p>No se encontraron actividades.</p>";
      return;
    }
  
    const lista = document.createElement("ul");
  
    actividades.forEach((actividad, index) => {
      const item = document.createElement("li");
  
      
      let enlaceAnexo = "<span>No hay anexos</span>";
      if (actividad.anexos instanceof File || actividad.anexos instanceof Blob) {
        const url = URL.createObjectURL(actividad.anexos);
        enlaceAnexo = `
          <a href="${url}" download="anexo_${index}_${actividad.anexos.name}" target="_blank">
            Descargar anexo (${actividad.anexos.name})
          </a>
        `;
      }
  
      item.innerHTML = `
        <strong>Fecha:</strong> ${actividad.fechaHora}<br>
        <strong>Supervisor:</strong> ${actividad.supervisor}<br>
        <strong>Descripción:</strong> ${actividad.descripcion}<br>
        <strong>Responsable:</strong> ${actividad.responsable}<br>
        <strong>Clima:</strong> ${actividad.condicionesClimaticas}<br>
        <strong>Anexos:</strong> ${enlaceAnexo}
      `;

        lista.appendChild(item);
    });
  
    contenedor.appendChild(lista);
}
  



function mostrarReporte(actividades, fechaInicio, fechaFin) {
    const contenedor = document.getElementById("resultado_reporte");
    contenedor.innerHTML = "";
  
    const encabezado = document.createElement("h3");
    encabezado.textContent = `Reporte del ${fechaInicio} al ${fechaFin}`;
    contenedor.appendChild(encabezado);
  
    const tablaHTML = `
    <table border="1" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Supervisor</th>
          <th>Descripción</th>
          <th>Responsable</th>
          <th>Clima</th>
          <th>Anexos</th> <!-- Nueva columna -->
        </tr>
      </thead>
      <tbody>
        ${actividades.map((act) => {
          const fecha = new Date(act.fechaHora).toLocaleDateString();
          const tieneAnexos = act.anexos instanceof File ? "Sí" : "No";
          return `
            <tr>
              <td>${fecha}</td>
              <td>${act.supervisor}</td>
              <td>${act.descripcion}</td>
              <td>${act.responsable}</td>
              <td>${act.condicionesClimaticas}</td>
              <td>${tieneAnexos}</td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
  
    contenedor.innerHTML += tablaHTML;
  
    
    const btnPDF = document.getElementById("btn_descargar_pdf");
    btnPDF.style.display = "inline-block";
  
    
    btnPDF.onclick = () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
  
      doc.setFontSize(14);
      doc.text(`Reporte de Actividades`, 14, 15);
      doc.setFontSize(11);
      doc.text(`Desde: ${fechaInicio}  Hasta: ${fechaFin}`, 14, 22);
  
      const rows = actividades.map((act) => [
        new Date(act.fechaHora).toLocaleDateString(),
        act.supervisor,
        act.descripcion,
        act.responsable,
        act.condicionesClimaticas,
        act.anexos instanceof File ? "Sí" : "No"
      ]);
      
      doc.autoTable({
        head: [['Fecha', 'Supervisor', 'Descripción', 'Responsable', 'Clima', 'Anexos']],
        body: rows,
        startY: 28,
      });
      
  
      doc.save(`Reporte_${fechaInicio}_a_${fechaFin}.pdf`);
    };
}
  



  


function mostrarMensaje(texto, tipo = "info", duracion = 6000) {
    const contenedor = document.getElementById("mensaje");
    contenedor.textContent = texto;
    contenedor.style.color = tipo === "error" ? "red" : "green";
  
    setTimeout(() => {
      contenedor.textContent = "";
    }, duracion);
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form_nueva_actividad")


    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const fecha = document.getElementById("fecha").value

        const supervisor = document.getElementById("supervisor").value.trim()

        const descripcion = document.getElementById("descripcion").value.trim()

        const archivo = document.getElementById("anexos").files[0]

        const responsable = document.getElementById("responsable").value.trim()

        const condiciones_climaticas = document.getElementById("condiciones_climaticas").value.trim()


        try {

            const actividad = new Actividad(fecha, supervisor, descripcion, archivo, responsable, condiciones_climaticas)

            const actividadRegistrada = bitacora.registrarActividad(actividad)

            if (actividadRegistrada) {
                mostrarMensaje("Actividad registrada con exito", "ok")
            }


        } catch (error) {
            mostrarMensaje(error.message, "error")
        }
    })




    const formConsulta = document.getElementById("form_consultar_actividades")

    
    formConsulta.addEventListener("submit", (e) => {
        e.preventDefault();

        const inicio = document.getElementById("consulta_inicio").value;
        const fin = document.getElementById("consulta_fin").value;

        try {
            const actividades = bitacora.consultarActividades(inicio, fin);

            mostrarActividades(actividades);

            if (actividades.length === 0) {
                mostrarMensaje("No hay actividades en ese rango de fechas.");
            }

        } catch (error) {
            mostrarMensaje(error.message, "error");
        }
    });




    const formReporte = document.getElementById("form_reporte");

    formReporte.addEventListener("submit", (e) => {
        e.preventDefault();

        const fechaInicio = document.getElementById("reporte_inicio").value;
        const fechaFin = document.getElementById("reporte_fin").value;

        try {
            const exito = bitacora.generarReporte(fechaInicio, fechaFin);

            if (!exito) {
                mostrarMensaje("No hay actividades para este rango de fechas.", "info");
                document.getElementById("resultado_reporte").innerHTML = "";
                return;
            }

            
            const actividades = bitacora.consultarActividades(fechaInicio, fechaFin);
            mostrarReporte(actividades, fechaInicio, fechaFin);

            mostrarMensaje("Reporte generado con éxito", "ok");

        } catch (error) {
            mostrarMensaje(error.message, "error");
        }
    });



})
