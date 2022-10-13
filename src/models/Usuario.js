const {Sequelize, DataTypes} = require('sequelize');
const database = require('../../db');

const Usuario = database.define('usuario',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      chave: DataTypes.INTEGER,
      situacao: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
});
module.exports = Usuario;