const db = require("../helpers/db.helper"); // import db

//Menjalankan query
// melihat semua Subscriber ---
const getListSubscriber = (cb) => {
  const sql = "SELECT * FROM subscriber";
  return db.query(sql, cb);
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
  const sql = `UPDATE subscriber SET "name" = COALESCE( $1, "name"),
  "updatedAt" = now()
  WHERE id = ${id} RETURNING *`;
  const values = [
    data.name
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
};
