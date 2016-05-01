var React = require('react');
var ChartPanel = require('./ChartPanel');
var LogPanel = require('./LogPanel');

var Metrics = React.createClass({
    render:function(){
        return (
            <div className="metrics">
                <div className="row">
                    <div className="col-md-6">
                        <ChartPanel title="Memory loaded" />
                    </div>
                    <div className="col-md-6">
                        <ChartPanel title="CPU loaded" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <LogPanel title="Real-time logs"/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Metrics;