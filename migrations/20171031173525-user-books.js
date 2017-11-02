'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // Sequelize is referencing the table here, which it capitalizes by default, so use the plural of User
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Books',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      up_vote: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: true,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Books');
  }
};

