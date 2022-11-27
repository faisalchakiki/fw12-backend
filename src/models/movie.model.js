const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua movies ---
const getListMovie = (cb) => {
  const sql = "SELECT * FROM movies";
  return db.query(sql,cb)
};

// melihat movie berdasarkan id ---
const readingMovie = (id, cb) => {
  const sql =`SELECT * FROM movies WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat movie / insert movie ---
const creatingMovie = (data, cb) => {
  const sql = 'INSERT INTO movies ("title","poster","dateRelease","director","duration","synopsis") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
  const values = [data.title, data.poster, data.dateRelease, data.director, data.duration, data.synopsis]
  db.query(sql, values, cb);
};

// mengupdate data movie---
const updatingMovie = (data, id, cb) => {
  const sql = `UPDATE movies SET "title" = COALESCE( $1, "title"),
  "poster" = COALESCE( $2, "poster"),
  "dateRelease" = COALESCE( $3, "dateRelease"),
  "director" = COALESCE( $4, "director"),
  "duration" = COALESCE( $5, "duration"),
  "synopsis" = COALESCE( $6, "synopsis"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.title,
    data.poster,
    data.dateRelease,
    data.director,
    data.duration,
    data.synopsis,
  ];
  db.query(sql,values, cb)
};

//mendelete movie---
const deletingMovie = (id, cb) => {
  const sql = `DELETE FROM movies WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListMovie,
  readingMovie,
  creatingMovie,
  updatingMovie,
  deletingMovie,
};
