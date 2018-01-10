const express = require('express');
const path = require('path');
const mapRoute = express.Router();
const mapController = require('../controller/maps')

mapRoute.use('/', mapController.index);

module.exports = mapRoute;
