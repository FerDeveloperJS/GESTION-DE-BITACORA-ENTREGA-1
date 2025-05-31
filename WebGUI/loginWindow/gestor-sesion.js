
import { GestorSesion } from "../../class/GestorSesion.js"

const gestorSesion = new GestorSesion()


function mostrarMensaje(texto, tipo = "info", duracion = 6000) {
    console.log("Mostrando mensaje: ", texto)
    const contenedor = document.getElementById("mensaje");
    contenedor.textContent = texto;
    contenedor.style.color = tipo === "error" ? "red" : "green";
  
    setTimeout(() => {
      contenedor.textContent = "";
    }, duracion);
}



const buttonS_SignIn = document.querySelectorAll(".sign-in")
const formSignIn = document.getElementById("form-sign-in") 



const formSignUp = document.getElementById("form-sign-up")
const buttonS_SignUp = document.querySelectorAll(".sign-up")



const formChangePass = document.getElementById("form-change-password")
const buttonS_ChangePass = document.querySelectorAll(".change-pass")





buttonS_SignIn.forEach(button => {
    button.addEventListener("click", () => {
        formSignIn.style.display = "block"

        formSignUp.style.display = "none"

        formChangePass.style.display  = "none"
    })
})


buttonS_SignUp.forEach(button => {
    button.addEventListener("click", () => {
        formSignUp.style.display = "block"

        formSignIn.style.display = "none"

        formChangePass.style.display = "none"
    })
})



buttonS_ChangePass.forEach(button => {
    button.addEventListener("click", () => {
        formChangePass.style.display = "block"

        formSignIn.style.display = "none"

        formSignUp.style.display = "none"
    })
})



document.addEventListener("DOMContentLoaded", () => {
    console.log("Pagina cargada")
    const formRegistro = document.getElementById("form-sign-up")
  
    formRegistro.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const nombre = document.getElementById("name").value.trim() 
  
      const contraseña = document.getElementById("password").value.trim()
  
      const email = document.getElementById("email").value.trim()
  
      try {
        const sesionRegistrada = gestorSesion.registrarse(nombre, email, contraseña)
  
        if (sesionRegistrada) {
          mostrarMensaje("Sesión registrada con éxito", "ok");

        } 
  
      } catch (error) {
        console.error("Error en registro", error)
        mostrarMensaje(error.message, "error");
      }
    })

})




document.addEventListener("DOMContentLoaded", () => {
    const formInicioSesion = document.getElementById("form-sign-in");


    formInicioSesion.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email-sign-in').value.trim();
        const password = document.getElementById('password-sign-in').value.trim();

        try {
            const sesionIniciada = gestorSesion.iniciarSesion(email, password);

            if (sesionIniciada) {
                mostrarMensaje("Sesión iniciada con éxito", "ok");

                setTimeout(function () {
                    window.location.href = "../bitacoraWindow/bitacora.html";
                }, 2000); 
            } 

        } catch (error) {
            mostrarMensaje(error.message, "error")
        }


        
    });
})



document.addEventListener("DOMContentLoaded", () => {
    const formCambiarContraseña = document.getElementById("form-change-password")

    formCambiarContraseña.addEventListener('submit', (e) => {
        e.preventDefault()

        const email = document.getElementById("email-change-password").value.trim()

        const contraseñaActual = document.getElementById("password-change-password").value.trim()

        const newPassword = document.getElementById("new_password").value.trim()


        try {
            const contraseñaCambiada = gestorSesion.cambiarContraseña(email, contraseñaActual, newPassword)

            if (contraseñaCambiada) {
                mostrarMensaje("Contraseña cambiada con exito", "ok")
            }


        } catch (error) {
            mostrarMensaje(error.message, "error")
        }
    })
})