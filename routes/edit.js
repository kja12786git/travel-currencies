const express = require('express');
const path = require('path');
const editRoute = express.Router();

editRoute.get('/', editController.index);
