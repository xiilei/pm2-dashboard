var express = require('express');
var app = express();
var compression = require('compression');
app.use(compression());

//test
var cst    = require('pm2/constants.js');
var client = require('./lib/client')(cst.DAEMON_RPC_PORT);
app.get('/list/localhost',function(req,res){
    client.list(function(err,list){
        if(err){
            res.json({error:err});
        }else{
            res.json(list);
        }
    });
});

app.listen(9615, function () {
  console.log('app listening on http://localhost:9615!');
});

