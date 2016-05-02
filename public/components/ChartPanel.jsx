var React = require('react');
var Chart = require('./Chart');
var Panel = require('react-bootstrap/lib/Panel');

function getRandomData(maximum) {
    var data = [];
    while (data.length < maximum) {
        var previous = data.length ? data[data.length - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        data.push(y < 0 ? 0 : y > 100 ? 100 : y);
    }
    return data;
}
/**
 * flot charts panel
 */
var ChartPanel = React.createClass({
    componentDidMount:function(){
    },

    getSeries:function(){
        var series = [];
        for (var i =0; i <7; i++) {
            series.push(Math.random()*98);
        }
        return series;
    },

    render:function(){
        return (
            <Panel header={this.props.title}>
                <Chart series={this.getSeries()} height='200px'/>
            </Panel>
        );
    }
});

module.exports = ChartPanel;