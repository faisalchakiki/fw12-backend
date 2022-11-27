const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua StatusBooking ---
const getListStatusBooking = (cb) => {
  const sql = "SELECT * FROM status_booking";
  return db.query(sql,cb)
};

// melihat StatusBooking berdasarkan id ---
const readingStatusBooking = (id, cb) => {
  const sql =`SELECT * FROM status_booking WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat StatusBooking / insert StatusBooking ---
const creatingStatusBooking = (data, cb) => {
  const sql = 'INSERT INTO status_booking ("idTime","idSchedule") VALUES ($1,$2) RETURNING *'
  const values = [data.idTime, data.idSchedule]
  db.query(sql, values, cb);
};

// mengupdate data StatusBooking---
const updatingStatusBooking = (data, id, cb) => {
  const sql = `UPDATE status_booking SET "name" = COALESCE( $1, "name"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.name
  ];
  db.query(sql,values, cb)
};

//mendelete StatusBooking---
const deletingStatusBooking = (id, cb) => {
  const sql = `DELETE FROM status_booking WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListStatusBooking,
  readingStatusBooking,
  creatingStatusBooking,
  updatingStatusBooking,
  deletingStatusBooking,
};
