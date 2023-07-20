var express = require('express');
var router = express.Router();
var Product = require('../models/productModels');

/* GET List Product. */
router.get('/', async function(req, res, next) {
  try {
    const product = await Product.find({});
    res.status(200).json({
      message: 'List of all products',
      products: product
    })
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
});

/* GET List Product by ID. */
router.get('/:id', async function(req, res, next) {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json({
      message: 'The product has been found',
      products: product
    })
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
});

/* POST Create Product. */
router.post('/', async function (req, res, next) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ 
      message: 'Successfully created a product',
      product: product 
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
});

module.exports = router;
