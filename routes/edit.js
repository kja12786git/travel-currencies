const express = require('express');
const path = require('path');
const editRoute = express.Router();
const mainController = require('../controller/main');
// to confirm... routes only needs to know where the controller is and handle paths

editRoute.get('/edit', mainController.edit);
editRoute.get('/edit/:id', mainController.edit);
editRoute.get('/editAll', mainController.editAll);
editRoute.get('/editAll/:id', mainController.edit);
editRoute.put('/editAll', mainController.update);
editRoute.put('/editAll/:id', mainController.update);
editRoute.put('/edit/:id', mainController.update);
editRoute.delete('/:id', mainController.delete);


editRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = editRoute;
