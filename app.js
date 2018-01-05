// loggers for dev
const logger = require('morgan');
const logs = console.log;

// dependency components for server
const express = require('express');
const router = express.Router();
const path = require('path');
const port = process.env.PORT || 1234;
const currencies = require('./db/currencyLayer.js');

// this main app var
const app = express();

app.use(express.static('public'));
app.use(logger('dev'));

//for non-public data
require('dotenv').config();

// set ejs as views engine and use views directory for templates
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
// set a port for server to run through

app.listen(port, () => {
    logs(`listening on ${port}`);

})

// default index response
app.get('/', (req,res) => {
//  res.send(`Server's ready...`)
  res.render('index');

})

// display all data at this route
app.get('/currencies', (req,res) => {
  res.json(currencies[0]);

})

//temporary display key
app.get('/currencies/quotes', (req,res) => {
  res.json(currencies[0].quotes);

})

// 404 for odd navigation
app.get('*', (req,res) => {
  res.status(404).send(`Nothing located at this url.`);

})
