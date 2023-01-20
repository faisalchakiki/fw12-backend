const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua ScheduleTime ---
const getListScheduleTime = (cb) => {
  const sql = "SELECT * FROM schedule_time";
  return db.query(sql,cb)
};

// melihat ScheduleTime berdasarkan id ---
const readingScheduleTime = (id, cb) => {
  const sql =`SELECT
  sm.*,
  array_agg(st.time, ',') AS times
FROM schedule_movie sm
  JOIN schedule_time st ON st."idSchedule" = sm."id"
WHERE sm.id = ${id}`
  return db.query(sql,cb)
};

// membuat ScheduleTime / insert ScheduleTime ---
const creatingScheduleTime = (data, cb) => {
  const sql = 'INSERT INTO schedule_time ("idTime","idSchedule") VALUES ($1,$2) RETURNING *'
  const values = [data.idTime, data.idSchedule]
  db.query(sql, values, cb);
};

// mengupdate data ScheduleTime---
const updatingScheduleTime = (data, id, cb) => {
  const sql = `UPDATE schedule_time SET "idTime" = COALESCE( $1, "idTime"),
  "idSchedule" = COALESCE($2 ,"idSchedule"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.idTime,
    data.idSchedule
  ];
  db.query(sql,values, cb)
};

//mendelete ScheduleTime---
const deletingScheduleTime = (id, cb) => {
  const sql = `DELETE FROM schedule_time WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListScheduleTime,
  readingScheduleTime,
  creatingScheduleTime,
  updatingScheduleTime,
  deletingScheduleTime,
};
