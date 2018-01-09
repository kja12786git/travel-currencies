const editModel = require('../models/edit');
const editController = {};

editController.index = (req,res) => {
  res.render('edit');

}

editController.show = (req, res) => {
  editModel.findById(req.params.id)
    .then(data => {
      res.render('edit/show', {
        data:data
        
      })

    })

}

editController.add = (req,res) => {
  editModel.create

}

editController.update = (req,res) => {


}

editController.delete = (req,res) => {


}

module.exports = editController;
