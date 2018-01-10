const express = require('express');
const path = require('path');
const editRoute = express.Router();
const mainController = require('../controller/main');

editRoute.get('/', mainController.add);

editRoute.get('/del', mainController.delete);

editRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = editRoute;
