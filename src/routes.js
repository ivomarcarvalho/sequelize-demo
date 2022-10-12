const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController');
const FabricanteController = require('./controllers/FabricanteController');
const ProdutoController = require('./controllers/ProdutoController');

routes
  .get('/categoria/:id', CategoriaController.index)
  .post('/categoria', CategoriaController.create)
  .put('/categoria', CategoriaController.update)
  .delete('/categoria/:id', CategoriaController.delete)

  .get('/qbg/:id', CategoriaController.qbg)

  .get('/fabricante/:id', FabricanteController.index)
  .post('/fabricante', FabricanteController.create)
  
  .get('/produto/:id', ProdutoController.index);

module.exports = routes
