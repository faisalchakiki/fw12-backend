const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua Subscriber ---
const countAllSubscriber = (filter, cb) => {
  const sql = `SELECT COUNT("email") AS "totalData" FROM subscriber WHERE email LIKE $1`
  const values = [`%${filter.search}%`]
  return db.query(sql, values, cb)
}

const getListSubscriber = (filter,cb) => {
  const sql = `SELECT * FROM subscriber WHERE email LIKE $1 ORDER BY "${filter.sortBy}" ${filter.sort} LIMIT $2 OFFSET $3`;
  const values = [`%${filter.search}%`,filter.limit, filter.offset]
  return db.query(sql,values,cb)
};

// melihat Subscriber berdasarkan id ---
const readingSubscriber = (id, cb) => {
  const sql = `SELECT * FROM subscriber WHERE id  = ${id}`;
  return db.query(sql, cb);
};

// membuat Subscriber / insert Subscriber ---
const creatingSubscriber = (data, cb) => {
  const sql =
    'INSERT INTO subscriber ("email") VALUES ($1) RETURNING *';
  const values = [data.idTime, data.idSchedule];
  db.query(sql, values, cb);
};

// mengupdate data Subscriber---
const updatingSubscriber = (data, id, cb) => {
  const sql = `UPDATE subscriber SET "email" = COALESCE( $1, "email"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.email
  ];
  db.query(sql,values, cb)
};

//mendelete Subscriber---
const deletingSubscriber = (id, cb) => {
  const sql = `DELETE FROM subscriber WHERE id = ${id} RETURNING *`;
  db.query(sql, cb);
};

module.exports = {
  getListSubscriber,
  readingSubscriber,
  creatingSubscriber,
  updatingSubscriber,
  deletingSubscriber,
  countAllSubscriber
};
