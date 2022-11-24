const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua casts ---
const getListCast = (cb) => {
  const sql = "SELECT * FROM casts";
  return db.query(sql,cb)
};

// melihat Cast berdasarkan id ---
const readingCast = (id, cb) => {
  const sql =`SELECT * FROM casts WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat Cast / insert Cast ---
const creatingCast = (data, cb) => {
  const sql = 'INSERT INTO casts ("name") VALUES ($1) RETURNING *'
  const values = [data.name]
  db.query(sql, values, cb);
};

// mengupdate data Cast---
const updatingCast = (data, id, cb) => {
  const sql =`UPDATE casts SET "name" = '${data.name}',
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`
  db.query(sql, cb)
};

//mendelete Cast---
const deletingCast = (id, cb) => {
  const sql = `DELETE FROM casts WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListCast,
  readingCast,
  creatingCast,
  updatingCast,
  deletingCast,
};
