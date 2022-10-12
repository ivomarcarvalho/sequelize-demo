const Sequelize = require('sequelize');
const database = require('../../db');
const Fabricante = require('./Fabricante');
const Categoria = require('./Categoria');
const CategoriaProduto = require('./CategoriaProduto');

const Produto = database.define('produto', {
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
})
// 1-1
Produto.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: 'idFabricante'
})
// 1-N
Fabricante.hasMany(Produto, {
    foreignKey: 'idFabricante'
})
// N-M ------------------------------------------------------------
Produto.belongsToMany(Categoria, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idProduto',
    constraint: true
})
Categoria.belongsToMany(Produto, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idCategoria',
    constraint: true
});
Produto.hasMany(CategoriaProduto,{foreignKey: 'idProduto'});
CategoriaProduto.belongsTo(Produto,{foreignKey:'idProduto'});
Categoria.hasMany(CategoriaProduto,{foreignKey:'idCategoria'});
CategoriaProduto.belongsTo(Categoria,{foreignKey:'idCategoria'});
//---------------------------------------------------------------
(async () => {
    //await database.sync();
    //await database.sync({ force: true });
})()
module.exports = Produto;