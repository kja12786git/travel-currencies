const express = require('express');
const path = require('path');
const cRoute = express.Router();
const cController = require('../controller/currencies');

cRoute.get('/', cController.index);

cRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = cRoute;
