const { Pool } = require("pg");

const db = new Pool({
  connectionString: "postgresql://postgres:1@localhost:5432/cinephile?schema=public"
  // user: "postgres",
  // host: "localhost",
  // database: "cinephile",
  // password: "1",
  // port: 5432,
});

db.connect((e) => {
  if (e) {
    console.log("data is not connected");
  } else {
    console.log("data is connected");
  }
});

module.exports = db;
