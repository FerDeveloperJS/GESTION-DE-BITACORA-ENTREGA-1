import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Supervisor = sequelize.define('Supervisor', {
  id_supervisor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  contrasena: DataTypes.STRING
}, {
  tableName: 'Supervisores',
  timestamps: false
});



export default Supervisor;
