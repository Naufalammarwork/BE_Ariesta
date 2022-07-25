const mysql = require('mysql');

const db = mysql.createPool({
  host: '192.168.8.253',
  user: 'root',
  password: 'root',
  database: 'bokormas'
});

db.getConnection(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

exports.db = db;