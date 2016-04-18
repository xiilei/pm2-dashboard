var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context:__dirname+'/public',
    entry:{
        'all':['jquery','react-bootstrap','react','react-dom','./entry']
    },
    output:{
            filename: '[name]-bundle.js',
            path: __dirname+'/public/build',
            publicPath:'/assets/build/'
    },
    resolve:{
        extensions:["", ".jsx", ".js"]
    },
    module: {
      loaders: [
        { test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel'},
        { test: /\.css$/, loader: "css"},
        { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
        { test: /\.(eot|woff|woff2|ttf|svg)$/, loader: "file-loader" }
      ]
    },
    plugins: [
        new ExtractTextPlugin("[name]-bundle.css")
    ]
};
