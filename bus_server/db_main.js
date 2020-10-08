var express = require('express')
var app = express()
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '11qqaa',
  database : 'bus_main'
});

connection.connect();


connection.query('select * from driver', function (err, rows, fields) {
  if (!err) {
      console.log(rows);
      console.log(fields);
      var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
          'fields : ' + JSON.stringify(fields);
  } else {
      console.log('query error : ' + err);
      res.send(err);
  }
});
  
connection.end();