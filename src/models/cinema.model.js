const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua cinema ---
const countAllCinema = (filter, cb) => {
  const sql = `SELECT COUNT("name") AS "totalData" FROM cinemas WHERE name LIKE $1`
  const values = [`%${filter.search}%`]
  return db.query(sql, values, cb)
}

const getListCinema = (filter,cb) => {
  const sql = `SELECT * FROM cinemas WHERE name LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`,filter.limit, filter.offset]
  return db.query(sql,values,cb)
};

// melihat Cinema berdasarkan id ---
const readingCinema = (id, cb) => {
  const sql =`SELECT * FROM cinemas WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat Cinema / insert Cinema ---
const creatingCinema = (data, cb) => {
  const sql = 'INSERT INTO cinemas ("name","logo","address","city") VALUES ($1,$2,$3,$4) RETURNING *'
  const values = [data.name, data.logo, data.address, data.city]
  db.query(sql, values, cb);
};

// mengupdate data Cinema---
const updatingCinema = (data, id, cb) => {
  const sql = `UPDATE cinemas SET "name" = COALESCE( $1, "name"),
  "logo" = COALESCE($2 ,"logo"),
  "address" = COALESCE($3 ,"address"),
  "city" = COALESCE($4 ,"city"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.name,
    data.logo,
    data.address,
    data.city,
  ];
  db.query(sql,values, cb)
};

//mendelete Cinema---
const deletingCinema = (id, cb) => {
  const sql = `DELETE FROM cinemas WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListCinema,
  readingCinema,
  creatingCinema,
  updatingCinema,
  deletingCinema,
  countAllCinema
};
