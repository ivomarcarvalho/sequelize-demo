'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      custo: {
        type: Sequelize.DOUBLE
      },
      preco: {
        type: Sequelize.DOUBLE
      },
      descricao: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('produto');
  }
};
