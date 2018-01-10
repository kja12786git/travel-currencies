const mainModel = require('../models/main');
const mainController = {};

mainController.index = (req,res) => {
  console.log('inside index method')
  mainModel.findAll()
      .then(data => {
        console.log('this is currencies: ', data)
        res.render('index', {
          currencies: data

        })

      })
      .catch(err => {
        console.log("were hitting an error")
        res.status(400).json(err);

      });

}

mainController.edit = (req,res) => {
  res.render('edit', {
    currencies: data

  })

}

mainController.add = (req,res) => {
  mainModel.create({
    symbol: req.body.symbol,
    country: req.body.country,
    gfxicon: req.body.gfxicon

  })
  .then(() => {
    res.redirect(`/`);

  })
  .catch(err => {
    res.status(500).json(err);

  })

}

mainController.update = (req,res) => {
  mainModel.update({
    symbol: req.body.symbol,
    country: req.body.country,
    gfxicon: req.body.gfxicon

  })
  .then(() => {
    res.redirect(`/`);

  })
  .catch(err => {
    res.status(500).json(err);

  })

}

mainController.delete = (req,res) => {
  mainModel.destroy({

  })
  .then(() => {
    res.redirect(`/`);

  })
  .catch(err => {
    res.status(500).json(err);

  })

}

module.exports = mainController;
