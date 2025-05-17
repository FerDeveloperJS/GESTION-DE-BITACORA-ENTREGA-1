import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Anexo = sequelize.define('Anexo', {
  id_anexo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_actividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ruta_archivo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Anexos',
  timestamps: false
});

export default Anexo
