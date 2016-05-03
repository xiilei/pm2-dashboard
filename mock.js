var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression());

app.use('/assets', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/index.html');
});

app.listen(9615, function () {
  console.log('app listening on http://localhost:9615!');
});

