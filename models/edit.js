const db = require('../db/config');

const Edit = {};

Edit.findAll = () => {
  return db.query(`SELECT * FROM currencies ORDER by country DESC`)

}

// Find and return a currencies item by id
Edit.findById = (id) => {
  return db.query(`SELECT * FROM currencies WHERE id = $1`, [id])

}

// CREATE new currencies data
Edit.create = (data) => {
  return db.one(
    `
      INSERT INTO currencies
      (one, two)
      VALUES ($1, $2) RETURNING *
    `,
    [currencies.one, currencies.two]
  );
};

// Find one id and delete from currencies
Edit.destroy = (id) => {
  return db.one(
    `
      DELETE FROM currencies
      WHERE id = $1
    `,
    [id]
  );

}

module.exports = Edit;
