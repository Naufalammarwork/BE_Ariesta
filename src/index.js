const express = require('express');
const bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const cors = require('cors');
const app = express();
const { db } = require('./model/dbConnection');
const { makeId } = require('./tools/makeId')
const { datetime } = require('./tools/datetime');
const { authenticateToken } = require('./middleware');
const { readRecords } = require('./model/readRecords')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/GetAccount', (req, res) => {

  const data = readRecords("Account");

  if (data != null && data.length > 0) {
    res.send(
      {
        "status": "Success", "statusCode": "200", "data": data
      }
    );
  } else {
    res.send(
      {
        "status": "Error", "statusCode": "500", "message": "Internal Server Error "
      })
  }
  
});

app.listen(3002, () => {
  console.log('server running at port 3002!');
});