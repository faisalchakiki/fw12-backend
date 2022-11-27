const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua casts_movie ---
const getListCastMovie = (cb) => {
  const sql = "SELECT * FROM casts_movie";
  return db.query(sql,cb)
};

// melihat castMovie berdasarkan id ---
const readingCastMovie = (id, cb) => {
  const sql =`SELECT * FROM casts_movie WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat castMovie / insert castMovie ---
const creatingCastMovie = (data, cb) => {
  const sql = 'INSERT INTO casts_movie ("idMovie","idCast") VALUES ($1,$2) RETURNING *'
  const values = [data.idMovie, data.idCast]
  db.query(sql, values, cb);
};

// mengupdate data CastMovie ---
const updatingCastMovie = (data, id, cb) => {
  const sql = `UPDATE casts_movie SET "idMovie" = COALESCE( $1, "idMovie"),
  "idCast" = COALESCE($2 ,"idCast"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.idMovie,
    data.idCast,
  ];
  db.query(sql,values, cb)
};

//mendelete CastMovie ---
const deletingCastMovie = (id, cb) => {
  const sql = `DELETE FROM casts_movie WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListCastMovie,
  readingCastMovie,
  creatingCastMovie,
  updatingCastMovie,
  deletingCastMovie,
};
