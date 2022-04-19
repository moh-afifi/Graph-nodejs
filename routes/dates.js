const express = require("express");
const router = express.Router();
const {Weight} = require("../models/weight");

router.get("/:id", async (req, res) => {
  try {
    const dateRes = await Weight.find({
      animal_id: req.params.id,
    },
      {
        weight: 0,
      }
    );
    console.log(dateRes);
    res.send(dateRes);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
