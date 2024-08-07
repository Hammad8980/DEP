const mysql = require('mysql');

const dbConfig = {
  host: 'HAMMAD-PC\\SQLEXPRESS',
  user: 'HAMMAD-PC\\LENOVO',
  password: "",
  database: 'crud_api',
};

const connection = mysql.createConnection(dbConfig);

module.exports = connection;