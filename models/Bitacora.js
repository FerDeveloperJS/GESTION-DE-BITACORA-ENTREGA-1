import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Bitacora = sequelize.define('Bitacora', {
  id_bitacora: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha_creacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  }
}, {
  tableName: 'Bitacoras',
  timestamps: false
});

export default Bitacora
