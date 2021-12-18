var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "db4free.net",
  user: "adminasdelsur",
  database: "asdelsur",
  port: 3306,
  password: "admin123",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  } else {
    console.log("DB As del Sur conectada");
  }

  console.log("Connección ID " + connection.threadId);
});

module.exports = connection;
