var BrowserWebSocketoser = WebScoket || MozWebScoket;

function WS(uri) {
    this.ws = null;
}

//init connection
WS.prototype.init = function (uri) {
    this.ws = new BrowserWebSocketoser(uri);
    //cleanup
    this.ws.onopen = function () {
    };
    this.ws.onclose = function () {
    };
    this.ws.onmessage = function (e) {
    };
    this.ws.onerror = function (e) {
    };
};

//switch to other host
WS.prototype.switch = function(uri) {

};

WS.prototype.send = function(message) {

};

//ping-pong
WS.prototype.heartbeat = function() {

};


module.exports = WS;