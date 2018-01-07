const express = require('express');
const mapRoutes = express.Router();

mapRoutes.get('/maps', (req,res) => {
  res.render('/maps')

})
