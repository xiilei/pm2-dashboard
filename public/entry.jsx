require("bootstrap/less/bootstrap.less");
var React = require('react');
var ReactDOM = require('react-dom');

var Dashboard = require('./components/dashboard');

var hosts = [{name:'host-1',apps:'hello,react'},{name:'host-2',apps:'hello,nodejs'}];
ReactDOM.render(
    <Dashboard hosts={hosts} />,
    document.getElementById('main')
);

