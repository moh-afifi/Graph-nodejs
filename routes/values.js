const express = require("express");
const router = express.Router();
const { Weight } = require("../models/weight");
//------------------------------------------------
router.get("/:id", async (req, res) => {
  try {
    const wieghtRes = await Weight.find(
      {
        animal_id: req.params.id,
      },
      {
        date: 0,
      }
    );

    const weightValues = [];
    for (var i = 0; i < wieghtRes.length; i++) {
      weightValues.push(wieghtRes[i]["weight"]);
    }
    var max = Math.max.apply(Math, weightValues);
    var min = Math.min.apply(Math, weightValues);

    res.send([{
      animal_id:wieghtRes[0]['animal_id'],
      max_weight: max,
      min_weight: min
    }]);
  } catch (err) {
    console.log(err);
  }
});
//------------------------------------------------
module.exports = router;
