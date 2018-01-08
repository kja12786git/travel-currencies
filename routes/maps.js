const express = require('express');
const path = require('path');
const mapRoute = express.Router();
const mapController = require('../controller/maps')

mapRoute.get('/', mapController.index);

mapRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = mapRoute;
