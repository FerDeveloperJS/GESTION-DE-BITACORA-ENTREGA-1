import readline from 'readline';
import { GestorSesion } from './class/GestorSesion.js';
import { Bitacora } from './class/Bitacora.js';
import { Actividad } from './class/Actividad.js';



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
                    rl.question('Ingrese las condiciones climáticas: ', (condicionesClimaticas) => {
                        
                        rl.question('Ingrese las rutas de los archivos anexos (separados por coma, o deje vacío si no hay): ', (anexosInput) => {
                            const anexos = anexosInput
                                .split(',')
                                .map(a => a.trim())
                                .filter(a => a !== '');


                            
                            const fechaHoraObj = new Date(fechaHora.replace(' ', 'T'));
                            if (isNaN(fechaHoraObj)) {
                                console.log('Formato de fecha/hora inválido. Debe ser YYYY-MM-DD HH:MM');
                                return mostrarMenuBitacora();
                            }

                            
                            const actividadObj = new Actividad(
                                fechaHoraObj,
                                supervisor,           
                                descripcion,
                                anexos,
                                responsable,
                                condicionesClimaticas
                            );


                            try {
                                bitacora.registrarActividad(actividadObj);
                                console.log('Actividad registrada correctamente.');
                            } catch (error) {
                                console.log('Error:', error.message);
                            }
                            mostrarMenuBitacora();
                        });
                    });
                });
            });
        });
    });
}


function consultarActividades() {
    rl.question('Ingrese la fecha de inicio (YYYY-MM-DD): ', (fechaInicio) => {
        rl.question('Ingrese la fecha de fin (YYYY-MM-DD): ', (fechaFin) => {

            const inicioDate = new Date(fechaInicio + 'T00:00:00');
            const finDate = new Date(fechaFin + 'T23:59:59');

            if (isNaN(inicioDate) || isNaN(finDate)) {
                console.log('Fechas inválidas. Usa el formato YYYY-MM-DD');
                return mostrarMenuBitacora();
            }

            try {
                const actividades = bitacora.consultarActividades(inicioDate, finDate);

                if (actividades.length === 0) {
                    console.log('❌ No hay actividades registradas en ese período.');
                } else {
                    console.log('✅ Actividades encontradas:\n');
                    actividades.forEach((act, index) => {
                        console.log(`Actividad ${index + 1}:`);
                        console.log(`Fecha y hora: ${act.fechaHora}`);
                        console.log(`Descripción: ${act.descripcion}`);
                        console.log(`Responsable: ${act.responsable}`);
                        console.log(`Supervisor: ${act.supervisor}`);
                        console.log(`Condiciones climáticas: ${act.condicionesClimaticas}`);
                        console.log(`Anexos: ${act.anexos?.join(', ') || 'Ninguno'}`);
                        console.log('------------------------');
                    });
                }

            } catch (error) {
                console.log('Error:', error.message);
            }

            mostrarMenuBitacora();
        });
    });
}


import PDFDocument from 'pdfkit';
import fs from 'fs';

function generarReporte() {
    rl.question('Ingrese la fecha de inicio (YYYY-MM-DD): ', (fechaInicio) => {
        rl.question('Ingrese la fecha de fin (YYYY-MM-DD): ', (fechaFin) => {
            try {

                const inicioDate = new Date(fechaInicio + 'T00:00:00'); 
                const finDate = new Date(fechaFin + 'T23:59:59');

                
                if (isNaN(inicioDate) || isNaN(finDate)) {
                    console.log('Las fechas ingresadas no son válidas.');
                    return mostrarMenuBitacora();
                }

                
                const actividades = bitacora.consultarActividades(inicioDate, finDate);
                
                if (actividades.length === 0) {
                    console.log('No hay actividades registradas en ese período.');
                } else {
                    const doc = new PDFDocument();
                    const nombreArchivo = `reporte_${fechaInicio}_a_${fechaFin}.pdf`;
                    doc.pipe(fs.createWriteStream(nombreArchivo));

                    doc.fontSize(16).text('Reporte de Actividades', { align: 'center' });
                    doc.moveDown();

                    actividades.forEach((act, index) => {
                        doc.fontSize(12).text(`Actividad ${index + 1}`);
                        doc.text(`Fecha y hora: ${act.fechaHora}`);
                        doc.text(`Descripción: ${act.descripcion}`);
                        doc.text(`Responsable: ${act.responsable}`);
                        doc.text(`Supervisor: ${act.supervisor}`);
                        doc.text(`Condiciones climáticas: ${act.condicionesClimaticas}`);
                        if (act.anexos && act.anexos.length > 0) {
                            doc.text(`Anexos: ${act.anexos.join(', ')}`);
                        } else {
                            doc.text('Anexos: Ninguno');
                        }
                        doc.moveDown();
                    });

                    doc.end();

                    console.log(`✅ Reporte generado exitosamente: ${nombreArchivo}`);
                    console.log(`📁 Lo encontrarás en: ${process.cwd()}/${nombreArchivo}`);
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
                    mostrarMenuBitacora();
                    
                } else {
                    console.log('Credenciales incorrectas.');
                }
            } catch (error) {
                console.log('Error:', error.message);
            }
            
            
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




