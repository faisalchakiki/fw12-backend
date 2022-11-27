const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua bookings ---
const getListBooking = (cb) => {
  const sql = "SELECT * FROM bookings";
  return db.query(sql,cb)
};

// melihat Booking berdasarkan id ---
const readingBooking = (id, cb) => {
  const sql =`SELECT * FROM bookings WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat Booking / insert Booking ---
const creatingBooking = (data, cb) => {
  const sql = 'INSERT INTO bookings ("dateBooking","idUsers","idMovie","idCinema","idStatus") VALUES ($1,$2,$3,$4,$5) RETURNING *'
  const values = [data.dateBooking,data.idUsers,data.idMovie,data.idCinema,data.idStatus]
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
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.dateBooking,
    data.idUsers,
    data.idMovie,
    data.idCinema,
    data.idStatus,
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
};
