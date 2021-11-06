const mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config();

module.exports = mysql.createConnection({
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PWD || "",
    database: process.env.DATABASE_DB,
})

