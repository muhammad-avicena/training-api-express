var express = require("express");
var router = express.Router();
var Product = require("../models/productModels");

/* GET List Product. */
router.get("/", async function (req, res, next) {
  try {
    const product = await Product.find({});
    res.status(200).json({
      message: "List of all products",
      products: product,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

/* GET List Product by ID. */
router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({
      message: "The product has been found",
      products: product,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

/* POST Create Product. */
router.post("/", async function (req, res, next) {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      message: "Successfully created a product",
      product: product,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

/* PUT Update Product. */
router.put('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const updates = req.body; 

    const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({
      message: 'The product has been updated',
      product: updatedProduct
    });
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      console.log("Invalid product ID format");
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});


/* DEL List Product by ID. */
router.delete('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: 'The product has been deleted',
      product: product
    });
  } catch (err) {
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      console.log("Invalid product ID format");
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
