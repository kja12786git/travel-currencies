const editModel = require('./models/edit');
const editController = {};

editController.index = (req,res) => {
  editModel.
  res.render('edit');

}

module.exports = editController;
