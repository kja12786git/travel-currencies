const express = require('express');
const path = require('path');
const editRoute = express.Router();
const mainController = require('../controller/main');
// to confirm... routes only needs to know where the controller is and handle paths

editRoute.get('/:id/edit', mainController.edit);
editRoute.put('/:id/edit', mainController.update);
editRoute.post('/:id', mainController.delete);

editRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = editRoute;
