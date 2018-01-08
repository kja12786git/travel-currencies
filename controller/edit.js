const editModel = require('../models/edit');
const editController = {};

editController.index = (req,res) => {
  res.render('edit');

}
/*editController.delete = (req,res) => {
//  editModel.destroy

}*/

module.exports = editController;
