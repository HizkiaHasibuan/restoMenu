var mysql = require('mysql2');

var con = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABSE,
    port: process.env.DB_PORT
});

module.exports = con;