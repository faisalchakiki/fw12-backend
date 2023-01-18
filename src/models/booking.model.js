const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua bookings ---
const countAllBooking = (filter, cb) => {
  const sql = `SELECT COUNT("id") AS "countBooking" FROM bookings WHERE "fullName" LIKE $1`
  const values = [`%${filter.search}%`]
  return db.query(sql, values, cb)
}

const getListBooking = (filter , cb) => {
  const sql = `SELECT * FROM bookings WHERE "fullName" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`,filter.limit, filter.offset]
  return db.query(sql,values,cb)
};

// melihat Booking berdasarkan id ---
const readingBooking = (id, cb) => {
  const sql =`SELECT * FROM bookings WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat Booking / insert Booking ---
const creatingBooking = (data, cb) => {
  const sql = 'INSERT INTO bookings ("dateBooking","idUsers","idMovie","idCinema","idStatus","idPayMethod","email","fullName","phoneNumber") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *'
  const values = [data.dateBooking,data.idUsers,data.idMovie,data.idCinema,data.idStatus,data.idPayMethod,data.email,data.fullName,data.phoneNumber]
  db.query(sql, values, cb);
};

// mengupdate data Booking---
const updatingBooking = (data, id, cb) => {
  console.log(data)
  const sql = `UPDATE bookings SET "dateBooking" = COALESCE( $1, "dateBooking"),
  "idUsers" = COALESCE($2 ,"idUsers"),
  "idMovie" = COALESCE($3 ,"idMovie"),
  "idCinema" = COALESCE($4 ,"idCinema"),
  "idStatus" = COALESCE($5 ,"idStatus"),
  "idpayMethod" = COALESCE($6 ,"idpayMethod"),
  "fullName" = COALESCE($6 ,"fullName"),
  "email" = COALESCE($6 ,"email"),
  "phoneNumber" = COALESCE($6 ,"phoneNumber"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.dateBooking,
    data.idUsers,
    data.idMovie,
    data.idCinema,
    data.idStatus,
    data.idPayMethod,
    data.fullName,
    data.email,
    data.phoneNumber,
  ];
  db.query(sql,values, cb)
};

//mendelete Booking---
const deletingBooking = (id, cb) => {
  const sql = `DELETE FROM bookings WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};


module.exports = {
  getListBooking,
  readingBooking,
  creatingBooking,
  updatingBooking,
  deletingBooking,
  countAllBooking
};
