var express = require('express');
var router = express.Router();

// All routes
const routes = [
  { path: '/', method: 'GET', description: 'Homepage' },
  { path: '/users', method: 'GET', description: 'Get all users' },
  { path: '/users', method: 'POST', description: 'Create a user' },
  { path: '/users/:id', method: 'GET', description: 'Get a user by ID' },
  { path: '/users/:id', method: 'PUT', description: 'Update a user by ID' },
  { path: '/products', method: 'GET', description: 'Get all products' },
  { path: '/products', method: 'POST', description: 'Create a product' },
  { path: '/products/:id', method: 'GET', description: 'Get a product by ID' },
  { path: '/products/:id', method: 'PUT', description: 'Update a product by ID' },
];

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { routes: routes });
});

module.exports = router;
