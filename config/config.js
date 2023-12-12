var { Sequelize} = require('sequelize');

var con = new Sequelize({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    dialect: "mysql",
    password: process.env.DB_PASSWORD,
    database: process.env.DATABSE,
    port: process.env.DB_PORT,
});

module.exports = con;