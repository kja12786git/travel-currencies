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
      (symbol, country, gfxcode, ccode)
      VALUES ($1, $2, $3, $4) RETURNING *
    `,
    [data.symbol, data.country, data.gfxcode, data.ccode]

  );

}

leData.update = (data, id) => {
    return db.none(
    `
      UPDATE currencies SET
      symbol = $1,
      country = $2,
      gfxcode = $3,
      ccode = $4
      
      WHERE id = $5

    `,
    [data.symbol, data.country, data.gfxcode, data.ccode, id]

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
