var React = require('react');
/**
 * flot charts panel
 */
var FlotPanel = React.createClass({
    displayName:'FlotPanel',
    render:function(){
        return (
            <div className="panel prw-panel">
                <div className="panel-heading">{this.props.name}</div>
                <div className="panel-body" style={{height:'200px'}}>
                </div>
            </div>
        );
    }
});

module.exports = FlotPanel;