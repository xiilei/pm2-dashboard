var React = require('react');
var Chart = require('./Chart');

function getRandomData(maximum) {
    var data = [];
    while (data.length < maximum) {
        var previous = data.length ? data[data.length - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        data.push(y < 0 ? 0 : y > 100 ? 100 : y);
    }
    // zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }
    return res;
}
/**
 * flot charts panel
 */
var ChartPanel = React.createClass({
    componentDidMount:function(){
        this.refs.chart;
    },
    render:function(){
        return (
            <div className="panel prw-panel">
                <div className="panel-heading">{this.props.title}</div>
                <div className="panel-body">
                    <Chart series={getRandomData(200)} height='200px'/>
                </div>
            </div>
        );
    }
});

module.exports = ChartPanel;