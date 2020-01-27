'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('members', {
      userId: {
        type: Sequelize.INTEGER,

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
        reference: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      },
      teamId: {
        type: Sequelize.INTEGER,

        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
        reference: {
          model: 'teams',
          key: 'id',
          as: 'teamId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('members');
  }
};
