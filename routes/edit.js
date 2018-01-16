const express = require('express');
const path = require('path');
const editRoute = express.Router();
const mainController = require('../controller/main');

// to confirm... routes only needs to know where the controller is and handle paths

editRoute.get('/:id/edit', mainController.edit);
editRoute.delete('/:id/edit', mainController.delete);

editRoute.get('/:id/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = editRoute;
