var React = require('react');
var ReactDOM = require('react-dom');

require('bootstrap/less/bootstrap.less');
require('./css/index.css');

var Dashboard = require('./components/dashboard');

var apps = [{name:'app-1'},{name:'app-2'}];
ReactDOM.render(
    <Dashboard apps={apps} />,
    document.getElementById('dashboard')
);