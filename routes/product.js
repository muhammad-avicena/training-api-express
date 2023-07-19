var express = require('express');
var router = express.Router();
var Product = require('../models/productModels');

/* GET List Product. */
router.get('/', function(req, res, next) {
  res.render('This is the list of products');
});


/* POST List Product. */
router.post('/', async function (req, res, next) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({ 
      message: 'Successfully added to database',
      product: product 
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({message: err.message});
  }
});

module.exports = router;
