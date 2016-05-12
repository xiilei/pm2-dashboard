var EventEmitter = require('events'),
    axon = require('pm2-axon'),
    rpc  = require('pm2-axon-rpc'),
    util = require('util'),
    async = require('async'),
    debug = require('debug')('pm2-restapi-web:pm2-client');

module.exports = Pm2Client;

/**
 * var client = require('./client')(9616,'localhost');
 * @param int|string port
 * @param strgin host
 */
function Pm2Client(port,host){
    if(!(this instanceof Pm2Client)){
        return new Pm2Client(port,host);
    }
    if(!port){
        throw new Error('A port or sock path is required');
    }
    EventEmitter.call(this);
    this.port = port;
    this.host = host;
    this.rpc_client = null;
    this.sock = null;
    this.status = 'ready';
    this.connected = false;
}

util.inherits(Pm2Client,EventEmitter);

/**
 * connect,call by every action
 */
Pm2Client.prototype.connect = function(cb) {
    var self = this;
    if(self.connected){
        return cb(null);
    }
    if(self.status == 'connecting' && self.sock){
        // self.sock.once('connect',cb);
        return cb(new Error('not connected'));
    }
    self.status = 'connecting';
    self.sock = axon.socket('req');
    self.rpc_client = new rpc.Client(self.sock);
    function onReconnect(){
        if(debug.enabled){
            debug('reconnect attempt on host %s',self.getport());
        }
        self.emit('reconnect');
    }
    function onConnect(){
        self.status = 'connected';
        self.connected = true;
        debug('pm2 God Daemon connected');
        self.emit('connect');
        cb(null);
    }
    self.sock.on('socket error',self.onclose.bind(self,'error'));
    self.sock.on('close',self.onclose.bind(self,'close'));
    self.sock.on('reconnect attempt',onReconnect);
    self.sock.on('connect',onConnect);
    self.sock.connect(this.port,this.host);
};

Pm2Client.prototype.getport = function(){
    return this.host ? this.host+':'+this.port : this.port;
};

Pm2Client.prototype.onclose = function(type){
    this.connected = false;
    this.emit('close',type);
    debug('client destroyd type:%s',type);
};

/**
 * destroy client connect
 */
Pm2Client.prototype.close = function(cb){
    var self = this;
    if(!self.sock){
        if(cb)cb();
        return;
    }
    if(cb){
        self.once('close',cb);
    }
    self.status = 'ready';
    self.sock.close();
};

Pm2Client.prototype.list = function(cb){
    var self = this;
    self.connect(function(err){
        if(err){
            cb && cb(err);
            return;
        }
        self.rpc_client.call('getMonitorData',{},cb);
    });
};

Pm2Client.prototype.stop = function(process_id){
    var self = this;
};

Pm2Client.prototype.restart = function(process_id,env,cb){
    var self = this;
    self.connect(function(err){
        if(err){
            cb && cb(err);
            return;
        }
        var opts = {id:process_id};
        if(env){
            opts.env = env;
        }
        self.rpc_client.call('restartProcessId',opts,cb);        
    });
};

Pm2Client.prototype.restartAll = function(cb){
    this.restartByName('__all__',cb);
};

Pm2Client.prototype.restartByName = function(name,cb){
    var self = this;
    self.connect(function(err){
        if(err){
            cb && cb(err);
            return;
        }
        self.list(function(err,list){
            if(err){
                if(cb)cb(err);
                return;
            }
            if(name && name !='__all__'){
                var new_list = [];
                list.forEach(function(app,i){
                    if(app.name == name){
                        new_list.push(app);
                    }
                });
                list = new_list;
            }
            async.eachLimit(list,1,function(app,next){
                debug('restart %s pm_id %s pid:%s',app.name,app.pm_id,app.pid);
                self.restart(app.pm_id,app.pm2_env,next);
            },function(err){
                cb(err);
            });
        });
    });
};
