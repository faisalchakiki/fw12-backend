const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua Times ---
const getListTime = (cb) => {
  const sql = "SELECT * FROM times";
  return db.query(sql,cb)
};

// melihat time berdasarkan id ---
const readingTime = (id, cb) => {
  const sql =`SELECT * FROM times WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat time / insert time ---
const creatingTime = (data, cb) => {
  const sql = 'INSERT INTO times ("time") VALUES ($1) RETURNING *'
  const values = [data.time]
  db.query(sql, values, cb);
};

// mengupdate data time---
const updatingTime = (data, id, cb) => {
  const sql = `UPDATE times SET "time" = COALESCE( $1, "time"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.time
  ];
  db.query(sql,values, cb)
};

//mendelete time---
const deletingTime = (id, cb) => {
  const sql = `DELETE FROM times WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListTime,
  readingTime,
  creatingTime,
  updatingTime,
  deletingTime,
};
