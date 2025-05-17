import { Sequelize, Op } from 'sequelize';
import sequelize from '../config/database.js'; 
import Supervisor from '../models/Supervisor.js';
import Bitacora from '../models/Bitacora.js';
import Actividad from '../models/Actividad.js';
import Anexo from '../models/Anexo.js';


import '../models/asociaciones.js';

async function ejecutarConsultas() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    console.log('\n--- Consultar todas las bitácoras ---');
    const todasLasBitacoras = await Bitacora.findAll();
    console.log(JSON.stringify(todasLasBitacoras, null, 2));

    console.log('\n--- Consultar actividades de la bitácora con ID 4 ---');
    const actividadesDeBitacora4 = await Actividad.findAll({
      where: {
        id_bitacora: 4
      }
    });
    console.log(JSON.stringify(actividadesDeBitacora4, null, 2));

    console.log('\n--- Consultar anexos de la actividad con ID 1 ---');
    const anexosDeActividad1 = await Anexo.findAll({
      where: {
        id_actividad: 1
      }
    });
    console.log(JSON.stringify(anexosDeActividad1, null, 2));

    console.log('\n--- Consultar actividades entre el 15 y el 18 de mayo de 2025 ---');
    const actividadesEnRangoDeFechas = await Actividad.findAll({
      where: {
        fechaHora: {
          [Op.between]: ['2025-05-15', '2025-05-18']
        }
      }
    });
    console.log(JSON.stringify(actividadesEnRangoDeFechas, null, 2));

    console.log('\n--- Consultar la actividad más reciente ---');
    const actividadMasReciente = await Actividad.findOne({
      order: [['fechaHora', 'DESC']]
    });
    console.log(JSON.stringify(actividadMasReciente, null, 2));

    console.log('\n--- Consultar actividades de Carlos Ramírez ---');
    const actividadesDeCarlosRamirez = await Actividad.findAll({
      attributes: ['id_actividad', 'descripcion', 'fechaHora'],
      include: [{
        model: Supervisor,
        as: 'supervisor', 
        where: {
          nombre: 'Carlos Ramírez'
        },
        attributes: []
      }]
    });
    console.log(JSON.stringify(actividadesDeCarlosRamirez, null, 2));

  } catch (error) {
    console.error('Error al ejecutar las consultas:', error);
  } finally {
    await sequelize.close();
    console.log('Conexión a la base de datos cerrada.');
  }
}

ejecutarConsultas();