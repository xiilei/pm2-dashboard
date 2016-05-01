var React = require('react');
var FlotPanel = require('./FlotPanel');

var Metrics = React.createClass({
    displayName:'Metrics',
    render:function(){
        return (
            <div className="metrics">
                <div className="row">
                    <div className="col-md-6">
                        <FlotPanel name="Memory loaded" />
                    </div>
                    <div className="col-md-6">
                        <FlotPanel name="CPU loaded" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Metrics;