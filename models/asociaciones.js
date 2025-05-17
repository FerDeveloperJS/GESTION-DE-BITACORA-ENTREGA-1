import Actividad from './Actividad.js';
import Supervisor from './Supervisor.js';
import Bitacora from './Bitacora.js';
import Anexo from './Anexo.js';


Actividad.belongsTo(Bitacora, { foreignKey: 'id_bitacora', as: 'bitacora' });
Actividad.belongsTo(Supervisor, { foreignKey: 'id_supervisor', as: 'supervisor' });
Supervisor.hasMany(Actividad, { foreignKey: 'id_supervisor', as: 'actividades' });
Bitacora.hasMany(Actividad, { foreignKey: 'id_bitacora', as: 'actividades' });
Actividad.hasMany(Anexo, { foreignKey: 'id_actividad', as: 'anexos' });
Anexo.belongsTo(Actividad, { foreignKey: 'id_actividad', as: 'actividad' });

