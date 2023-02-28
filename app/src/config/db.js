/* db.js */
/* 데이터 베이스를 정정하는 코드 */

const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSWORD,
  database: process.env.DB_DATABASE,
});

db.connect();

module.exports = db;
