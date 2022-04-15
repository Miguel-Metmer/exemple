const mysql = require("mysql");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "exemple"
});

module.exports = connection;