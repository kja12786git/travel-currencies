const express = require('express');
const path = require('path');
const editRoute = express.Router();
const editController = require('../controller/edit');

editRoute.get('/', editController.index);
editRoute.get('/add', editController.add);
editRoute.get('/del', editController.delete);

module.exports = editRoute;
