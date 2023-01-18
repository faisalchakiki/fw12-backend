const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua reservedSeat ---
const getListReservedSeat = (cb) => {
  const sql = "SELECT * FROM reserved_seats";
  return db.query(sql,cb)
};

// melihat ReservedSeat berdasarkan id ---
const readingReservedSeat = (id, cb) => {
  const sql =`SELECT * FROM reserved_seats WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat ReservedSeat / insert ReservedSeat ---
const creatingReservedSeat = (data,id, cb) => {
  const sql = 'INSERT INTO reserved_seats ("seatNum","idBooking") VALUES ($1,$2) RETURNING *'
  const values = [data,id]
  db.query(sql, values, cb);
};

// mengupdate data ReservedSeat---
const updatingReservedSeat = (data, id, cb) => {
  const sql = `UPDATE reserved_seats SET "seatNum" = COALESCE( $1, "seatNum"),
  "idBooking" = COALESCE($2 ,"idBooking"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.seatNum,
    data.idBooking,
  ];
  db.query(sql,values, cb)
};

//mendelete ReservedSeat---
const deletingReservedSeat = (id, cb) => {
  const sql = `DELETE FROM reserved_seats WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListReservedSeat,
  readingReservedSeat,
  creatingReservedSeat,
  updatingReservedSeat,
  deletingReservedSeat,
};
