const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua forgotAccount ---
const countAllForgotAccount = (filter, cb) => {
  const sql = `SELECT COUNT("email") AS "totalData" FROM forgot_accounts WHERE email LIKE $1`
  const values = [`%${filter.search}%`]
  return db.query(sql, values, cb)
}

const getListForgotAccount = (filter,cb) => {
  const sql = `SELECT * FROM forgot_accounts WHERE email LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`,filter.limit, filter.offset]
  return db.query(sql,values,cb)
};

// melihat ForgotAccount berdasarkan id ---
const readingForgotAccount = (id, cb) => {
  const sql =`SELECT * FROM forgot_accounts WHERE id  = ${id}`
  return db.query(sql,cb)
};

// membuat ForgotAccount / insert ForgotAccount ---
const creatingForgotAccount = (data, cb) => {
  const sql = 'INSERT INTO forgot_accounts ("email","code") VALUES ($1,$2) RETURNING *'
  const values = [data.email, data.code]
  db.query(sql, values, cb);
};

// mengupdate data ForgotAccount---
const updatingForgotAccount = (data, id, cb) => {
  const sql = `UPDATE forgot_accounts SET "email" = COALESCE( $1, "email"),
  "code" = COALESCE($2 ,"code"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.email,
    data.code,
  ];
  db.query(sql,values, cb)
};

//mendelete forgot_account---
const deletingForgotAccount = (id, cb) => {
  const sql = `DELETE FROM forgot_accounts WHERE id = ${id} RETURNING *`
  db.query(sql ,cb)
};

module.exports = {
  getListForgotAccount,
  readingForgotAccount,
  creatingForgotAccount,
  updatingForgotAccount,
  deletingForgotAccount,
  countAllForgotAccount
};
