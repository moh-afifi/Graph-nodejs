const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/graphDB');
const express = require('express');
const bodyParser = require('body-parser');
//-------------------------------------------------------
const router = express.Router();
//-------------------------------------------------------
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//-------------------------------------------------------
const weights = require('./routes/weights');
const values = require('./routes/values');
const dates = require('./routes/dates');
//----------------------------------------------------------------
app.use('/weight', weights);
app.use('/weightValues', values);
app.use('/date', dates);
//----------------------------------------------------------------
app.listen(3000, () => {
  console.log('success');
});
