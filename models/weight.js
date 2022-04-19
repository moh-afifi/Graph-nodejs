const mongoose = require("mongoose");
const WeightSchema = new mongoose.Schema({
  animal_id: Number,
  weight: Number,
  date: String,
});

const Weight = mongoose.model("Weight", WeightSchema);

exports.Weight = Weight;
