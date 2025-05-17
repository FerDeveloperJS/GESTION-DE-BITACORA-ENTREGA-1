import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mibase', 'postgres', 'papaymama17', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;