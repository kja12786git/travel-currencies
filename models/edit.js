const db = require('../db/config');

const Edit = {};

Edit.findAll = () => {
  return db.query(`SELECT * FROM currencies ORDER by country DESC`)

}

// Find and return a currencies item by id
Edit.findById = (id) => {
  return db.query(`SELECT country FROM currencies WHERE id = $1`, [id])

}

// INSERT/create new currency row in table data
Edit.create = (data) => {
  return db.one(
    `
      INSERT INTO currencies
      (symbol, country, gfxcode)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [currencies.symbol, currencies.country, currencies.gfxcode]

  );
};

// Find one id and delete from currencies table
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
