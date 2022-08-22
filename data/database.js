const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: "Arkar^Aye$Myint30",
});

module.exports = pool;
