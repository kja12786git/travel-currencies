// loggers for dev
const logger = require('morgan');
const logs = console.log;

// dependency components for server
const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 1234;

const mainController = require('./controller/main.js')

//db files
const currencies = require('./db/currencyLayer');

// this main app var
const app = express();

// set app to use dependencies
app.use(express.static('public'));
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// for securing data on the server-side
require('dotenv').config();

// set ejs as views engine and use views directory for templates
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');


// set a port for server to run through
app.listen(port, () => {
    logs(`listening on ${port}`);

})

// default index response fwds to maincontroller index
app.get('/', mainController.index);
app.post('/new', mainController.create);

// fwd to Routers
const mapsRoutes = require('./routes/maps');
app.get('/maps', mapsRoutes);
app.get('/map', mapsRoutes);

const currencyRoutes = require('./routes/currencies');
app.get('/currencies', currencyRoutes);

app.get('/new', (req, res) => {
  res.render('new')

})

const editRoutes = require('./routes/edit');
app.get('/editAll', mainController.editAll);

app.get('/:id/edit', editRoutes);
app.put('/:id/edit', mainController.update);
app.get('/:id', mainController.each); // routes are a cascading effect, must position /:id below other routes

app.delete('/:id', mainController.delete);

// static quotes data display keys - untilized
app.get('/currencies/quotes', (req,res) => {
  res.json(currencies[0].quotes);

})

// 404 for odd navigation
app.get('/*', (req,res) => {
  res.status(404).send(`Nothing located at this url.`);

})
