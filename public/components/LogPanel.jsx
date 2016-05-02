var React = require('react');
var LogTable = require('./LogTable');
var Switch = require('rc-switch');

require('rc-switch/assets/index.css');

var LogPanel = React.createClass({
    onSwitch:function(value){
        console.log('real-time logs switch:',value);
    },
    render:function(){
        return (
            <div className="panel prw-panel">
                <div className="panel-heading">{this.props.title} <Switch className="pull-right" onChange={this.onSwitch}/></div>
                <div className="panel-body log-panel-body">
                    <LogTable />
                </div>
            </div>
        )
    }
});

module.exports = LogPanel;