
import Sequelize from 'sequelize';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'postgres'});

const models = {
  User: sequelize.import('/users'),
  Channel: sequelize.import('channels'),
  Team: sequelize.import('teams'),
  Message: sequelize.import('messages')
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

