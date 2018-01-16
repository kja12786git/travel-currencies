const db = require('../db/config');
const Cities = {};

Cities.findAll = () => {
//  return db.query(`SELECT name FROM city WHERE countrycode="${x.value}" ORDER by population DESC LIMIT 5`)
  return db.query(`SELECT name FROM city ORDER by population DESC LIMIT 5`)

}

module.exports = Cities;
