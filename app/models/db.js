module.exports = app => {

  const mysql = require("mysql");
  const configMySQL = require("../config/config.msql.js");
  // Create a connection to the database
  const connection = mysql.createConnection({
    host: configMySQL.HOST,
    user: configMySQL.USER,
    password: configMySQL.PASSWORD,
    database: configMySQL.DB
  });
  // open the MySQL connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  // module.exports = connection;

  return connection
}
