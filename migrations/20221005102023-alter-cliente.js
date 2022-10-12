'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('cliente', 'telefone', {
      type: Sequelize.STRING,
      allowNull: true
    }),
    await queryInterface.addColumn('cliente', 'celular', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('cliente', 'telefone');
    await queryInterface.removeColumn('cliente', 'celular');
  }
};
