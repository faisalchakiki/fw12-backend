const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua movies ---
const countAllMovie = (filter, cb) => {
  const sql = `SELECT COUNT("title") AS "totalData" FROM movies WHERE title LIKE $1`;
  const values = [`%${filter.search}%`];
  return db.query(sql, values, cb);
};

const getListMovie = (filter, cb) => {
  // console.log(filter)
  const sql = `SELECT m.* , string_agg(g.name,',') AS genre FROM movies m
  LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
  LEFT JOIN genres g ON g.id = mg."idGenre" 
  WHERE m.title LIKE $1 GROUP BY m."id" ORDER BY title ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`, filter.limit, filter.offset];
  return db.query(sql, values, cb);
};

// membuat movie / insert movie ---
const creatingMovie = (data, cb) => {
  const sql =
    'INSERT INTO movies ("title","poster","dateRelease","director","duration","synopsis") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [
    data.title,
    data.poster,
    data.dateRelease,
    data.director,
    data.duration,
    data.synopsis,
  ];
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
  db.query(sql, values, cb);
};

//mendelete movie---
const deletingMovie = (id, cb) => {
  const sql = `DELETE FROM movies WHERE id = ${id} RETURNING *`;
  db.query(sql, cb);
};

const listMovieWithGenre = (cb) => {
  const sql = `SELECT DISTINCT
  m.*,
  sm."dateStart",
  sm."dateEnd",
  string_agg(g.name, ',') AS genre
FROM movies m
  JOIN schedule_movie sm ON sm."idMovies" = m."id"
  LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
  LEFT JOIN genres g ON g.id = mg."idGenre"
WHERE
  current_date BETWEEN sm."dateStart"
  AND sm."dateEnd"
  GROUP BY m."id", m."title", sm."idMovies", sm."dateStart", sm."dateEnd",sm."id"`;
  db.query(sql, cb);
};

// melihat movie berdasarkan id ---
const readingMovie = (id, cb) => {
  const sql = `SELECT
  m.*,
  string_agg(DISTINCT c.name, ', ') AS casts,
  string_agg(DISTINCT g.name, ', ') AS genre
FROM movies m
  LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
  LEFT JOIN genres g ON g.id = mg."idGenre"
  LEFT JOIN casts_movie cm ON cm."idMovie" = m."id"
  LEFT JOIN casts c ON c.id = cm."idCast"
WHERE m.id = ${id}
GROUP BY m."id";`;
  db.query(sql, cb);
};

const listUpcoming = (data, cb) => {
  const sql = `SELECT m.*, string_agg(g.name,',') AS genre
  FROM movies m 
  LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
  LEFT JOIN genres g ON g.id = mg."idGenre"
  WHERE date_part('month', "dateRelease")::TEXT = COALESCE(NULLIF($1,''), date_part('month',current_date)::TEXT)
  AND date_part('year', "dateRelease")::TEXT = COALESCE(NULLIF($2,''), date_part('year',current_date)::TEXT) GROUP BY m."id"`;
  const values = [data.month, data.year];
  db.query(sql, values, cb);
};

module.exports = {
  getListMovie,
  readingMovie,
  creatingMovie,
  updatingMovie,
  deletingMovie,
  countAllMovie,
  listMovieWithGenre,
  listUpcoming,
};
