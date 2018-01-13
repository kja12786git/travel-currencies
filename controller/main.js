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

mainController.each = (req,res) => {
  mainModel.findById(req.params.id)
  .then(data => {
        console.log(`What are giving, db? ${db}`)
      res.render('show', {
        table: data

      })

    })
    .catch(err => {
      console.log("got an error from the each controller")
      res.status(400).json(err);

    });

}

mainController.edit = (req,res) => {
  console.log('inside edit method controller')
  mainModel.findById(req.params.id)
      .then(data => {
        console.log('this is currencies: ', data)
        res.render('edit', {
          data: data,
          id: req.params.id,
          symbol: data.symbol,
          country: data.country,
          gfxcode: data.gfxcode

        })
      })
      .catch(err => {
        console.log("got an error from the edit controller")
        res.status(400).json(err);

      });

}

mainController.editAll = (req,res) => {
  console.log('inside edit method controller')
  mainModel.findAll()
    .then(data => {
      console.log('this is currencies: ', data)
      res.render('editAll', {
        currencies: data,

      })
    })
    .catch(err => {
      console.log("got an error from the edit controller")
      res.status(400).json(err);

    });

}

mainController.add = (req,res) => {
  console.log(`at add method controller, this is currencies... ${req.body}`)
    mainModel.create({
      symbol: req.body.symbol,
      country: req.body.country,
      gfxcode: req.body.gfxcode

    })
    .then( data => {
      res.redirect(`/${data.id}`);

    })
    .catch(err => {
      console.log('Got an error in the create controller');
      res.status(400).json(err);

    })

}

mainController.update = (req,res) => {
  mainModel.findById(req.params.id, {
    symbol: req.body.symbol,
    country: req.body.country,
    gfxcode: req.body.gfxcode

  } )
  .then(() => {
//    res.redirect(`/${req.params.id}`);
      res.redirect('/')
  })
  .catch(err => {
    res.status(400).json(err);

  })

}

mainController.delete = (req,res) => {
  MainModel.delete(req.params.id)
  .then(() => {
    res.redirect(`/`);

  })
  .catch(err => {
    res.status(500).json(err);

  })

}

module.exports = mainController;
