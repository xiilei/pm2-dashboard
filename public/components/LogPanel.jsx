var React = require('react');
var LogTable = require('./LogTable');

var LogPanel = React.createClass({
    render:function(){
        return (
            <div className="panel prw-panel">
                <div className="panel-heading">{this.props.title}</div>
                <div className="panel-body log-panel-body">
                    <LogTable />
                </div>
            </div>
        )
    }
});

module.exports = LogPanel;