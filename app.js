var express = require('express');

var app = express();
 
app.use('/assets/',express.static('public/build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/index.html');
})

app.listen(9000);