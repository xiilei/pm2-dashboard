var express = require('express');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var config = require("./webpack.config");


var app = express();

config.entry.vendor.unshift('webpack/hot/dev-server');
config.entry.vendor.unshift('webpack-dev-server/client?http://localhost:9000/');
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler,{
    publicPath: "/assets/"
}));
 
// app.use('/assets/',express.static('public/build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/public/index.html');
})

app.listen(9000);