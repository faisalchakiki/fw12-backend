const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua users ---
const countAllUsers = (filter, cb) => {
  const sql = `SELECT COUNT("id") AS "totalData" FROM users WHERE "firstName" LIKE $1`;
  const values = [`%${filter.search}%`];
  return db.query(sql, values, cb);
};

const getListUsers = (filter, cb) => {
  const sql = `SELECT * FROM users WHERE "firstName" LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`, filter.limit, filter.offset];
  return db.query(sql, values, cb);
};

// melihat user berdasarkan id ---
const readingUser = (id, cb) => {
  const sql = `SELECT * FROM users WHERE id  = ${id}`;
  return db.query(sql, cb);
};

// membuat user / insert ---
const creatingUser = (data, cb) => {
  const sql =
    'INSERT INTO users ("firstName","lastName","phoneNumber","email","password") VALUES ($1, $2, $3, $4, $5) RETURNING *';
  const values = [
    data.firstName,
    data.lastName,
    data.phoneNumber,
    data.email,
    data.password,
  ];
  db.query(sql, values, cb);
};

// mengupdate data user---
const updatingUser = (data, id, cb) => {
  const sql = `UPDATE users SET "firstName" = COALESCE( $1, "firstName"),
  "lastName" = COALESCE( $2, "lastName"),
  "phoneNumber" = COALESCE( $3, "phoneNumber"),
  "email" = COALESCE( $4, "email"),
  "password" = COALESCE( $5, "password"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.firstName,
    data.lastName,
    data.phoneNumber,
    data.email,
    data.password,
  ];
  db.query(sql, values, cb);
};

//mendelete user---
const deletingUser = (id, cb) => {
  const sql = `DELETE FROM users WHERE id = ${id} RETURNING *`;
  db.query(sql, cb);
};

//mengecek email di user
const authEmailUser = (data, cb) => {
  const sql = `SELECT * FROM users WHERE email = $1`;
  const values = [data.email]
  return db.query(sql,values, cb);
};

module.exports = {
  getListUsers,
  readingUser,
  creatingUser,
  updatingUser,
  deletingUser,
  countAllUsers,
  authEmailUser,
};
