var express = require("express");
var router = express.Router();
var User = require("../models/userModels");

/* GET List User. */
router.get("/", async function (req, res, next) {
  try {
    const user = await User.find({});
    res.status(200).json({
      message: "List of all users",
      users: user,
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
    const user = await User.findById(id);
    res.status(200).json({
      message: "The user has been found",
      user: user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

/* POST Create User. */
router.post("/", async function (req, res, next) {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      message: "Successfully created a user",
      user: user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

/* PUT Update User. */
router.put("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });
    res.status(200).json({
      message: "The user has been updated",
      user: updatedUser,
    });
  } catch (err) {
    if (err.name === "CastError" && err.kind === "ObjectId") {
      console.log("Invalid product ID format");
      return res.status(404).json({ message: "User not found" });
    }
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
