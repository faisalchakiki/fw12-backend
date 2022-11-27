const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// Count Data
const countAllCast = (filter, cb) => {
  const sql = `SELECT COUNT("name") AS "totalData" FROM casts WHERE name LIKE $1`
  const values = [`%${filter.search}%`]
  return db.query(sql, values, cb)
}

// melihat semua casts ---
const getListCast = (filter, cb) => {
  const sql = `SELECT * FROM casts WHERE name LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`,filter.limit, filter.offset]
  return db.query(sql,values,cb)
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
  const sql = `UPDATE casts SET "name" = COALESCE( $1, "name"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.name,
  ];
  db.query(sql, cb)
};

//mendelete Cast---
const deletingCast = (id, cb) => {
  const sql = `DELETE FROM casts WHERE id = ${id} RETURNING *`
  db.query(sql,values,cb)
};

module.exports = {
  getListCast,
  readingCast,
  creatingCast,
  updatingCast,
  deletingCast,
  countAllCast
};
