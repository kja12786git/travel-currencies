const db = require('../db/config');
const Cities = {};

Cities.findAll = () => {
  return db.query(`SELECT * FROM city ORDER by population ASC LIMIT 5`)

}

module.exports = Cities;
