process.env.NODE_ENV = 'development';
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

config.entry.vendor.unshift(
    "webpack-dev-server/client?http://localhost:9000/",
    "webpack/hot/dev-server"
);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot:true,
    publicPath:config.output.publicPath
});

server.listen(9000);