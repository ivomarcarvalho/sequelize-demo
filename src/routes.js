const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController');
const FabricanteController = require('./controllers/FabricanteController');
const ProdutoController = require('./controllers/ProdutoController');
const UsuarioController = require('./controllers/UsuarioController');
routes
  .get('/categoria/:id', CategoriaController.index)
  .post('/categoria', CategoriaController.create)
  .put('/categoria', CategoriaController.update)
  .delete('/categoria/:id', CategoriaController.delete)

  .get('/qbg/:id', CategoriaController.qbg)

  .get('/fabricante/:id', FabricanteController.index)
  .post('/fabricante', FabricanteController.create)
  
  .get('/produto/:id', ProdutoController.index)

  .get('/usuario/:id', UsuarioController.index)
  .post('/usuario', UsuarioController.create)
  .put('/usuario', UsuarioController.update)
  .delete('/usuario/:id', UsuarioController.delete);
  
module.exports = routes
