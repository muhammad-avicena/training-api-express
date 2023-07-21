var express = require('express');
var router = express.Router();

// All routes
const routes = [
  { path: '/', method: 'GET', description: 'Homepage' },
  { path: '/api/users', method: 'GET', description: 'Get all users' },
  { path: '/api/users', method: 'POST', description: 'Create a user' },
  { path: '/api/users/:id', method: 'GET', description: 'Get a user by ID' },
  { path: '/api/users/:id', method: 'PUT', description: 'Update a user by ID' },
  { path: '/api/product', method: 'GET', description: 'Get all products' },
  { path: '/api/product', method: 'POST', description: 'Create a product' },
  { path: '/api/product/:id', method: 'GET', description: 'Get a product by ID' },
  { path: '/api/product/:id', method: 'PUT', description: 'Update a product by ID' },
  { path: '/api/product/:id', method: 'DEL', description: 'Delete a product by ID' },
];

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { routes: routes });
});

module.exports = router;
