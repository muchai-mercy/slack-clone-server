
import Sequelize from 'sequelize';
import config from '../config/config.json';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'postgres'});

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Team: sequelize.import('./team'),
  Message: sequelize.import('./message')
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

