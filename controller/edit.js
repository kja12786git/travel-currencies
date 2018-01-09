const editModel = require('../models/edit');
const editController = {};

editController.index = (req,res) => {
  res.render('edit');

}

editController.show = (req, res) => {


}

editController.add = (req,res) => {
  editModel.update({

  })

}

editController.update = (req,res) => {
  editModel.update({
    symbol: req.body.symbol,
    country: req.body.country,
    gfxicon: req.body.symbol

  })
  .then(() => {
    res.redirect(`/`);

  })
  .catch(err => {
    res.status(500).json(err);

  })

}
/*
editController.delete = (req,res) => {
  editModel.delete({

  })

}*/

module.exports = editController;
