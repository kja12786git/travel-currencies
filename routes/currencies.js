const express = require('express');
const path = require('path');
const cRoute = express.Router();
const currencies = require('../db/currencyLayer');
const cController = require('../controller/currencies');

cRoute.get('/', cController.index);

module.exports = cRoute;
