var React = require('react');
var ReactDOM = require('react-dom');

require('bootstrap.css');
require('./css/index.css');

var Dashboard = require('./components/Dashboard');

var apps = [{name:'app-1'},{name:'app-2'}];
ReactDOM.render(
    <Dashboard apps={apps} />,
    document.getElementById('dashboard')
);