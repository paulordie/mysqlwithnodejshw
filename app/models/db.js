const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sqluser',
  password: 'Info@1234',
  database: 'testdb'
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;