const mysql = require('mysql2');
const config = require('./config.js')

// Conección a la base de datos.

const pool = mysql.createPool({
  host: config.host,
  user: 'admin',
  password: config.password,
  database: config.database,
  connectionLimit: 500000

});

module.exports = {pool}
