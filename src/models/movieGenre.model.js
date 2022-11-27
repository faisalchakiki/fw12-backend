const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua movie_genre ---
const getListMovieGenre = (cb) => {
  const sql = "SELECT * FROM movie_genre";
  return db.query(sql,cb)
};

// melihat MovieGenre berdasarkan id ---
const readingMovieGenre = (id, cb) => {
  const sql =`SELECT * FROM movie_genre WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat MovieGenre / insert MovieGenre ---
const creatingMovieGenre = (data, cb) => {
  const sql = 'INSERT INTO movie_genre ("email","code") VALUES ($1,$2) RETURNING *'
  const values = [data.email, data.code]
  db.query(sql, values, cb);
};

// mengupdate data MovieGenre---
const updatingMovieGenre = (data, id, cb) => {
  const sql = `UPDATE movie_genre SET "idMovie" = COALESCE( $1, "idMovie"),
  "idGenre" = COALESCE($2 ,"idGenre"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.idMovie,
    data.idGenre,
  ];
  db.query(sql,values, cb)
};

//mendelete movieGenre---
const deletingMovieGenre = (id, cb) => {
  const sql = `DELETE FROM movie_genre WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListMovieGenre,
  readingMovieGenre,
  creatingMovieGenre,
  updatingMovieGenre,
  deletingMovieGenre,
};
