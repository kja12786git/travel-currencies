const express = require('express');
const path = require('path');
const editRoute = express.Router();
const editController = require('../controller/edit');

editRoute.get('/', editController.index);

module.exports = editRoute;
