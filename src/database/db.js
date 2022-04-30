import Sequelize from 'sequelize';

export const sequelize = new Sequelize('cointraker', 'jojo', 'elephantogreen', {
  host: 'localhost',
  dialect: 'postgres',
});
