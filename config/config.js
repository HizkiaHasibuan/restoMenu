var mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      console.log('ayolah');
      return;
    }
    console.log('Connected to MySQL database');
  });

module.exports = con;