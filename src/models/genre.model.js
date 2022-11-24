const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua Genres ---
const getListGenre = (cb) => {
  const sql = "SELECT * FROM genres";
  return db.query(sql,cb)
};

// melihat Genre berdasarkan id ---
const readingGenre = (id, cb) => {
  const sql =`SELECT * FROM genres WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat Genre / insert Genre ---
const creatingGenre = (data, cb) => {
  const sql = 'INSERT INTO genres ("name") VALUES ($1) RETURNING *'
  const values = [data.name]
  db.query(sql, values, cb);
};

// mengupdate data Genre---
const updatingGenre = (data, id, cb) => {
  const sql =`UPDATE genres SET "name" = '${data.name}',
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`
  db.query(sql, cb)
};

//mendelete genre---
const deletingGenre = (id, cb) => {
  const sql = `DELETE FROM genres WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListGenre,
  readingGenre,
  creatingGenre,
  updatingGenre,
  deletingGenre,
};
