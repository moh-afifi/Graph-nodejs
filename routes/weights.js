const express = require("express");
const router = express.Router();
const { Weight } = require("../models/weight");

router.get("/:id", async (req, res) => {
  try {
    const wieghtRes = await Weight.find({
      animal_id: req.params.id,
    });
    console.log(wieghtRes);
    res.send(wieghtRes);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
