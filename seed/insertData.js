import sequelize from '../config/database.js';
import Supervisor from '../models/Supervisor.js';
import Bitacora from '../models/Bitacora.js';
import Actividad from '../models/Actividad.js';
import Anexo from '../models/Anexo.js';


async function insertarDatos() {
  try {
    await sequelize.sync({ force: true }); 

    
    const supervisores = await Supervisor.bulkCreate([
      { nombre: 'Carlos Ramírez', email: 'carlos@example.com', contrasena: 'c123456' },
      { nombre: 'María Torres', email: 'maria@example.com', contrasena: 'm456789' },
      { nombre: 'Luis Gómez', email: 'luis@example.com', contrasena: 'l789101112' }
    ]);

    
    const bitacoras = await Bitacora.bulkCreate([
      { fecha_creacion: '2025-05-15' },
      { fecha_creacion: '2025-05-16' },
      { fecha_creacion: '2025-05-17' }
    ]);

    
    const actividades = await Actividad.bulkCreate([
      {
        id_bitacora: bitacoras[0].id_bitacora,
        id_supervisor: supervisores[0].id_supervisor,
        fechaHora: '2025-05-15 08:00:00',
        descripcion: 'Inspección de terreno A',
        responsable: 'Pedro López',
        condicionesClimaticas: 'Soleado'
      },
      {
        id_bitacora: bitacoras[0].id_bitacora,
        id_supervisor: supervisores[0].id_supervisor,
        fechaHora: '2025-05-15 14:00:00',
        descripcion: 'Verificación de equipo',
        responsable: 'Ana Ruiz',
        condicionesClimaticas: 'Nublado'
      },
      {
        id_bitacora: bitacoras[1].id_bitacora,
        id_supervisor: supervisores[1].id_supervisor,
        fechaHora: '2025-05-16 09:30:00',
        descripcion: 'Supervisión de drenaje',
        responsable: 'Jorge Díaz',
        condicionesClimaticas: 'Lluvia ligera'
      },
      {
        id_bitacora: bitacoras[2].id_bitacora,
        id_supervisor: supervisores[2].id_supervisor,
        fechaHora: '2025-05-17 10:45:00',
        descripcion: 'Control de acceso',
        responsable: 'Laura Pérez',
        condicionesClimaticas: 'Soleado'
      }
    ]);

    
    await Anexo.bulkCreate([
      { id_actividad: actividades[0].id_actividad, ruta_archivo: 'archivos/terrenoA_foto1.jpg' },
      { id_actividad: actividades[0].id_actividad, ruta_archivo: 'archivos/terrenoA_mapa.pdf' },
      { id_actividad: actividades[1].id_actividad, ruta_archivo: 'archivos/equipo_lista.pdf' },
      { id_actividad: actividades[2].id_actividad, ruta_archivo: 'archivos/drenaje_video.mp4' },
      { id_actividad: actividades[3].id_actividad, ruta_archivo: 'archivos/control_acceso_log.txt' }
    ]);

    console.log('✅ Datos insertados correctamente.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al insertar datos:', error);
    process.exit(1);
  }
}

insertarDatos();
