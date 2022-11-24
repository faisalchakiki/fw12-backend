const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua users ---
const getListUsers = (cb) => {
  const sql = "SELECT * FROM users";
  return db.query(sql,cb)
};

// melihat user berdasarkan id ---
const readingUser = (id, cb) => {
  const sql =`SELECT * FROM users WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat user / insert ---
const creatingUser = (data, cb) => {
  const sql = 'INSERT INTO users ("firstName","lastName","phoneNumber","email","password") VALUES ($1, $2, $3, $4, $5) RETURNING *'
  const values = [data.firstName, data.lastName, data.phoneNumber, data.email, data.password]
  db.query(sql, values, cb);
};

// mengupdate data user---
const updatingUser = (data, id, cb) => {
  const sql =`UPDATE users SET "firstName" = '${data.firstName}',
  "lastName" = '${data.lastName}',
  "phoneNumber" = '${data.phoneNumber}',
  "email" = '${data.email}',
  "password" = '${data.password}',
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`
  db.query(sql, cb)
};

//mendelete user---
const deletingUser = (id, cb) => {
  const sql = `DELETE FROM users WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListUsers,
  readingUser,
  creatingUser,
  updatingUser,
  deletingUser,
};