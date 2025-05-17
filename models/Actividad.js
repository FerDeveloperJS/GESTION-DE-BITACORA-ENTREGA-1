import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Actividad = sequelize.define('Actividad', {
  id_actividad: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_bitacora: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaHora: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsable: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condicionesClimaticas: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Actividades',
  timestamps: false
});



export default Actividad;
