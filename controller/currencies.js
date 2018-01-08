const currencies = require('../db/currencyLayer');
const cController = {};

cController.index = (req,res) => {
  res.json(currencies[0].quotes);

}

cController.addnew = (req, res) => {


}

module.exports = cController;
