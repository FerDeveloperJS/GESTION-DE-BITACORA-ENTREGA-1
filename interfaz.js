

import readline from 'readline';
import { GestorSesion } from './class/GestorSesion.js';
import { Bitacora } from './class/Bitacora.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const gestor = new GestorSesion();

const bitacora = new Bitacora();

function mostrarMenuBitacora() {
    console.log('\nMenú:');
    console.log('1. Registrar actividad');
    console.log('2. Consultar actividades');
    console.log('3. Generar reporte');
    console.log('4. Salir');
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                registrarActividad();
                break;
            case '2':
                consultarActividades();
                break;
            case '3':
                generarReporte();
                break;
            case '4':
                console.log('Saliendo...');
                rl.close();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                mostrarMenuBitacora();
        }
    });
}

function registrarActividad() {
    rl.question('Ingrese la descripción de la actividad: ', (descripcion) => {
        rl.question('Ingrese el nombre del responsable: ', (responsable) => {
            rl.question('Ingrese el nombre del supervisor: ', (supervisor) => {
                rl.question('Ingrese la fecha y hora (YYYY-MM-DD HH:MM): ', (fechaHora) => {
                    try {
                        const actividad = { descripcion, responsable, supervisor, fechaHora };
                        bitacora.registrarActividad(actividad);
                        console.log('Actividad registrada correctamente.');
                    } catch (error) {
                        console.log('Error:', error.message);
                    }
                    mostrarMenuBitacora();
                });
            });
        });
    });
}

function consultarActividades() {
    rl.question('Ingrese la fecha de inicio (YYYY-MM-DD): ', (fechaInicio) => {
        rl.question('Ingrese la fecha de fin (YYYY-MM-DD): ', (fechaFin) => {
            try {
                const actividades = bitacora.consultarActividades(fechaInicio, fechaFin);
                console.log('Actividades encontradas:', actividades);
            } catch (error) {
                console.log('Error:', error.message);
            }
            mostrarMenuBitacora();
        });
    });
}

function generarReporte() {
    rl.question('Ingrese la fecha de inicio (YYYY-MM-DD): ', (fechaInicio) => {
        rl.question('Ingrese la fecha de fin (YYYY-MM-DD): ', (fechaFin) => {
            try {
                const resultado = bitacora.generarReporte(fechaInicio, fechaFin);
                if (!resultado) {
                    console.log('No hay actividades registradas en ese período.');
                }
            } catch (error) {
                console.log('Error:', error.message);
            }
            mostrarMenuBitacora();
        });
    });
}

function mostrarMenu() {
    console.log('\n--- Menú ---');
    console.log('1. Registrarse');
    console.log('2. Iniciar sesión');
    console.log('3. Cambiar contraseña');
    console.log('4. Salir');
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                registrarUsuario();
                break;
            case '2':
                iniciarSesion();
                break;
            case '3':
                cambiarContraseña();
                break;
            case '4':
                console.log('Saliendo...');
                rl.close();
                break;
            default:
                console.log('Opción no válida.');
                mostrarMenu();
        }
    });
}

function registrarUsuario() {
    rl.question('Nombre: ', (nombre) => {
        rl.question('Email: ', (email) => {
            rl.question('Contraseña: ', (contraseña) => {
                try {
                    gestor.registrarse(nombre, email, contraseña);
                    console.log('Usuario registrado exitosamente.');
                } catch (error) {
                    console.log('Error:', error.message);
                }
                mostrarMenu();
            });
        });
    });
}

function iniciarSesion() {
    rl.question('Email: ', (email) => {
        rl.question('Contraseña: ', (contraseña) => {
            try {
                if (gestor.iniciarSesion(email, contraseña)) {
                    console.log('Inicio de sesión exitoso.');
                } else {
                    console.log('Credenciales incorrectas.');
                }
            } catch (error) {
                console.log('Error:', error.message);
            }
            mostrarMenuBitacora();
        });
    });
}

function cambiarContraseña() {
    rl.question('Email: ', (email) => {
        rl.question('Contraseña actual: ', (contraseña) => {
            rl.question('Nueva contraseña: ', (nuevaContraseña) => {
                try {
                    gestor.cambiarContraseña(email, contraseña, nuevaContraseña);
                    console.log('Contraseña cambiada exitosamente.');
                } catch (error) {
                    console.log('Error:', error.message);
                }
                mostrarMenu();
            });
        });
    });
}

mostrarMenu();




