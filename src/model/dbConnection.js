const odbc = require('odbc');

const path = "D:/Quick access/Documents/tables"
// const db = odbc.connect("DRIVER={Microsoft Paradox (*.db )};DSN=ariesta;Database=" + path);

const connectionConfig = {
  connectionString: 'DSN=ariesta',
  connectionTimeout: 10,
  loginTimeout: 10,
  driver:"Microsoft Paradox Driver (*.db )"
}

const db = odbc.connect(connectionConfig);

db.then(function (err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

exports.db = db;