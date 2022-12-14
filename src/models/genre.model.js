const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua Genres ---
const countAllGenre = (filter, cb) => {
  const sql = `SELECT COUNT("name") AS "totalData" FROM genres WHERE name LIKE $1`
  const values = [`%${filter.search}%`]
  return db.query(sql, values, cb)
}

const getListGenre = (filter,cb) => {
  const sql = `SELECT * FROM genres  WHERE name LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`,filter.limit, filter.offset]
  return db.query(sql,values,cb)
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
  const sql = `UPDATE genres SET "name" = COALESCE( $1, "name"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.name,
  ];
  db.query(sql,values, cb)
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
  countAllGenre
};
