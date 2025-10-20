const db = require('../config/db');

exports.findAll= async()=>{
  const result = await db.query("SELECT * FROM vehiculos");
  return result.rows;
}

