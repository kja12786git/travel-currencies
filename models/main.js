const db = require('../db/config');
const leData = {};

leData.findAll = () => {
  return db.query(`SELECT * FROM currencies ORDER by country ASC`)

}

// Find and return a currencies item by id
leData.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM currencies WHERE id = $1`, [id])

}

// INSERT/create new currency row in table data
leData.create = data => {
  return db.one (
    `
      INSERT INTO currencies
      (symbol, country, gfxcode)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [data.symbol, data.country, data.gfxcode]

  );

}

leData.update = (currencies, id) => {
    return db.none(
    `
      UPDATE currencies SET
      symbol = $1,
      country = $2,
      gfxcode = $3
      WHERE id = $4
    `,
    [currencies.symbol, currencies.country, currencies.gfxcode, id]

  );

};

// Find one id and delete from currencies table
leData.destroy = (id) => {
  return db.one(
    `
      DELETE FROM currencies
      WHERE id = $1
    `,
    [id]

  );

};

module.exports = leData;
