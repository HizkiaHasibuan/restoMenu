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

module.exports = con;