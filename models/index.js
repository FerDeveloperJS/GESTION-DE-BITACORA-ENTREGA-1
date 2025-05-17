import { sequelize } from '../config/database.js';
import Supervisor from './Supervisor.js';
import Bitacora from './Bitacora.js';
import Actividad from './Actividad.js';
import Anexo from './Anexo.js';



Supervisor.hasMany(Actividad, { foreignKey: 'id_supervisor' });
Actividad.belongsTo(Supervisor, { foreignKey: 'id_supervisor' });

Bitacora.hasMany(Actividad, { foreignKey: 'id_bitacora' });
Actividad.belongsTo(Bitacora, { foreignKey: 'id_bitacora' });

Actividad.hasMany(Anexo, { foreignKey: 'id_actividad' });
Anexo.belongsTo(Actividad, { foreignKey: 'id_actividad' });


export {
  sequelize,
  Supervisor,
  Bitacora,
  Actividad,
  Anexo
};

