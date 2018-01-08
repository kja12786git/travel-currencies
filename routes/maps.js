const express = require('express');
const path = require('path');
const mapRoute = express.Router();

mapRoute.get('/', (req,res) => {
  res.render('map');

})

mapRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = mapRoute;
