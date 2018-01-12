const express = require('express');
const path = require('path');
const editRoute = express.Router();
const mainController = require('../controller/main');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//editRoute.get('/:id', mainController.each);
editRoute.get('/edit', mainController.edit);
editRoute.get('/editAll', mainController.editAll);
//editRoute.get('/edit/add', mainController.edit);
//editRoute.put('/edit/:id', mainController.update);
//editRoute.post('edit/add', mainController.add);
editRoute.delete('/edit', mainController.delete);


editRoute.get('/*', (req, res) => {
  res.status(404).send('Nothing found here!');

})

module.exports = editRoute;
