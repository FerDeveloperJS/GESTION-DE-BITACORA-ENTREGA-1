document.addEventListener("DOMContentLoaded", () => {
    const formNuevaActividad = document.getElementById("form_nueva_actividad");
    const mensajeDiv = document.getElementById("mensaje");

    // Obtén el id_supervisor del usuario logueado
    const id_supervisor = localStorage.getItem("id_supervisor");
    const id_bitacora = 1; // Cambia esto si tienes varias bitácoras

    formNuevaActividad.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Usa fecha y hora actual, o ajusta según tu necesidad
        const fecha = document.getElementById("fecha").value;
        const fechaHora = fecha + "T00:00:00"; // Si solo tienes fecha, agrega hora por defecto

        const descripcion = document.getElementById("descripcion").value.trim();
        const responsable = document.getElementById("responsable").value.trim();
        const condicionesClimaticas = document.getElementById("condiciones_climaticas").value.trim();

        // El backend NO espera el nombre del supervisor, sino el id_supervisor
        const actividad = {
            id_bitacora: Number(id_bitacora),
            id_supervisor: Number(id_supervisor),
            fechaHora,
            descripcion,
            responsable,
            condicionesClimaticas
        };

        console.log("Datos enviados:", actividad);

        try {
            const response = await fetch('/api/bitacora/actividad', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(actividad)
            });
            const data = await response.json();
            if (response.ok) {
                mensajeDiv.textContent = "Actividad registrada con éxito";
                mensajeDiv.style.color = "green";
                formNuevaActividad.reset();
            } else {
                mensajeDiv.textContent = data.message || "Error al registrar actividad";
                mensajeDiv.style.color = "red";
            }
        } catch (error) {
            mensajeDiv.textContent = error.message;
            mensajeDiv.style.color = "red";
        }
    });
});