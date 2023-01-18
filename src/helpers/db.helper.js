const { Pool } = require("pg");

const db = new Pool({
  connectionString: "postgresql://postgres:ju7aE9HgUVW!rkL@db.talutbkuxpigmbbmcoqm.supabase.co:5432/postgres"
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
