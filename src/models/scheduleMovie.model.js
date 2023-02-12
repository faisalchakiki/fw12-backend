const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua ScheduleMovie ---
const getListScheduleMovie = (cb) => {
  const sql = "SELECT * FROM schedule_movie";
  return db.query(sql, cb);
};

// melihat ScheduleMovie berdasarkan id ---
const readingScheduleMovie = (id, cb) => {
  const sql = `SELECT * FROM schedule_movie WHERE idMovie  = ${id}`;
  return db.query(sql, cb);
};

// membuat ScheduleMovie / insert ScheduleMovie ---
const creatingScheduleMovie = (data, cb) => {
  const sql =
    'INSERT INTO schedule_movie ("idMovie","idCinema","price","dateStart","dateEnd") VALUES ($1,$2,$3,$4,$5) RETURNING *';
  const values = [
    data.idMovie,
    data.idCinema,
    data.price,
    data.dateStart,
    data.dateEnd,
  ];
  db.query(sql, values, cb);
};

// mengupdate data ScheduleMovie---
const updatingScheduleMovie = (data, id, cb) => {
  const sql = `UPDATE schedule_movie SET "idMovie" = COALESCE( $1, "idMovie"),
  "idCinema" = COALESCE($2 ,"idCinema"),
  "price" = COALESCE($3 ,"price"),
  "dateStart" = COALESCE($4 ,"dateStart"),
  "dateEnd" = COALESCE($5 ,"dateEnd"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.idMovie,
    data.idCinema,
    data.price,
    data.dateStart,
    data.dateEnd,
  ];
  db.query(sql, values, cb);
};

//mendelete ScheduleMovie---
const deletingScheduleMovie = (id, cb) => {
  const sql = `DELETE FROM schedule_movie WHERE id = ${id} RETURNING *`;
  db.query(sql, cb);
};

// mengambil semua info schedule untuk ditampilkan menjadi satu
const infoSchedule = (idMovie, cb) => {
  const sql = `SELECT
  sm.*,
  c."name",
  c."city",
  c."logo",
  c."address",
  array_agg(st.time) as times
  FROM schedule_movie sm
  JOIN schedule_time st ON st."idSchedule" = sm."id"
  JOIN cinemas c ON c."id" = sm."idCinema"
  WHERE sm."idMovies" = $1 group by sm."idMovies", c."id", sm."id"`;
  const values = [idMovie];
  db.query(sql, values, cb);
};

const citySchedule = (idMovie, cb) => {
  const sql = `SELECT
  c."city"
FROM schedule_movie sm
  LEFT JOIN cinemas c ON c."id" = sm."idCinema"
WHERE sm."idMovies" = $1 group by sm."idMovies", c."id", sm."id"`;
  const values = [idMovie];
  db.query(sql, values, cb);
};

const getPaymentMethod = (cb) => {
  const sql = "SELECT * FROM payment_method";
  return db.query(sql, cb);
};

module.exports = {
  getListScheduleMovie,
  readingScheduleMovie,
  creatingScheduleMovie,
  updatingScheduleMovie,
  deletingScheduleMovie,
  infoSchedule,
  citySchedule,
  getPaymentMethod,
};
