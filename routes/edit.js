const express = require('express');
const path = require('path');
const editRoute = express.Router();
const mainController = require('../controller/main');

editRoute.get('/edit', mainController.edit);

editRoute.get('/add', mainController.add);

editRoute.get('/del', mainController.delete);

editRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = editRoute;
