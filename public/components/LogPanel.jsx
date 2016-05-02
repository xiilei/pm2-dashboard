var React = require('react');
var LogTable = require('./LogTable');
var Switch = require('rc-switch');
var Panel = require('react-bootstrap/lib/Panel');

require('rc-switch/assets/index.css');

var LogPanel = React.createClass({
    onSwitch:function(value){
        console.log('real-time logs switch:',value);
    },
    render:function(){
        var header = (
            <div>{this.props.title} <Switch className="pull-right" onChange={this.onSwitch}/></div>
        );
        return (
            <Panel header={header}>
                <LogTable />
            </Panel>
        )
    }
});

module.exports = LogPanel;