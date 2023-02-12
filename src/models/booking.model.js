const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua bookings ---
const countAllBooking = (filter, cb) => {
  const sql = `SELECT COUNT("id") AS "countBooking" FROM bookings WHERE "fullName" LIKE $1`;
  const values = [`%${filter.search}%`];
  return db.query(sql, values, cb);
};

const getListBooking = (filter, cb) => {
  const sql = `SELECT * FROM bookings WHERE "fullName" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`, filter.limit, filter.offset];
  return db.query(sql, values, cb);
};

// melihat Booking berdasarkan id ---
const readingBooking = (id, cb) => {
  const sql = `SELECT * FROM bookings WHERE id  = ${id}`;
  return db.query(sql, cb);
};

// membuat Booking / insert Booking ---
const creatingBooking = (data, cb) => {
  try {
    const sql =
      'INSERT INTO bookings ("dateBooking","timeBooking","idUsers","idMovie","idCinema","idStatus","idPayMethod","email","fullName","phoneNumber","total") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
    const values = [
      data.dateBooking,
      data.timeBooking,
      data.idUsers,
      data.idMovie,
      data.idCinema,
      data.idStatus,
      data.idPayMethod,
      data.email,
      data.fullName,
      data.phoneNumber,
      data.total,
    ];
    db.query(sql, values, cb);
  } catch (err) {
    console.log(err);
  }
};

// mengupdate data Booking---
const updatingBooking = (data, id, cb) => {
  console.log(data);
  const sql = `UPDATE bookings SET "dateBooking" = COALESCE( $1, "dateBooking"),
  "timeBooking" = COALESCE( $2, "timeBooking"),
  "idUsers" = COALESCE($3 ,"idUsers"),
  "idMovie" = COALESCE($4 ,"idMovie"),
  "idCinema" = COALESCE($5 ,"idCinema"),
  "idStatus" = COALESCE($6 ,"idStatus"),
  "idpayMethod" = COALESCE($7 ,"idpayMethod"),
  "fullName" = COALESCE($8 ,"fullName"),
  "email" = COALESCE($9 ,"email"),
  "phoneNumber" = COALESCE($10 ,"phoneNumber"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.dateBooking,
    data.timeBooking,
    data.idUsers,
    data.idMovie,
    data.idCinema,
    data.idStatus,
    data.idPayMethod,
    data.fullName,
    data.email,
    data.phoneNumber,
  ];
  db.query(sql, values, cb);
};

//mendelete Booking---
const deletingBooking = (id, cb) => {
  const sql = `DELETE FROM bookings WHERE id = ${id} RETURNING *`;
  db.query(sql, cb);
};

const historyBooking = (id, cb) => {
  console.log(id);
  const sql = `SELECT 
  b.id,
  b."dateBooking",
  b."timeBooking",
  c.logo,
  m.title
  FROM bookings b 
  JOIN movies m ON b."idMovie" = m."id"
  JOIN cinemas c ON c."id" = b."idCinema"
  WHERE "idUsers" = ${id}`;
  db.query(sql, cb);
};

const ticket = (id, cb) => {
  const sql = `SELECT DISTINCT
  b.id,
  b."dateBooking",
  b."timeBooking",
  b."idStatus",
  b.total,
  string_agg(g.name,',') AS "genresMovie",
  m.title
  FROM bookings b 
  JOIN movies m ON b."idMovie" = m."id"
  LEFT JOIN movie_genre mg ON mg."idMovie" = m."id"
  LEFT JOIN genres g ON mg."idGenre" = g."id"
  WHERE b."id" = ${id} GROUP BY b.id,m.title;`;
  db.query(sql, cb);
};

const seatsTicket = (id, cb) => {
  const sql = `SELECT DISTINCT
  b.id,
  array_agg(rs."seatNum") AS "seatBooking"
  FROM bookings b 
  JOIN reserved_seats rs ON rs."idBooking" = b.id
  WHERE b."id" = ${id} GROUP BY b.id;`;
  db.query(sql, cb);
};

module.exports = {
  getListBooking,
  readingBooking,
  creatingBooking,
  updatingBooking,
  deletingBooking,
  countAllBooking,
  historyBooking,
  ticket,
  seatsTicket,
};
