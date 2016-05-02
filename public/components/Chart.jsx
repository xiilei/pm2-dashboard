var React = require('react');
var _Chart = require('chart.js');

/**
 * flot charts
 */
var Chart = React.createClass({
    getDefaultProps:function(){
        return {series:[],height:'200px'};
    },
    componentDidMount:function(){
        var myChart = new _Chart(this.refs.container.getContext('2d'), {
            type: 'line',
            data: {
                labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00"],
                datasets: [
                    {
                        label:'metrics',
                        fill: true,
                        backgroundColor: "rgba(26, 179, 148,0.3)",
                        borderColor: "rgba(26, 179, 148,1)",
                        pointBorderWidth:1,
                        pointBackgroundColor:"rgba(26, 179, 148,1)",
                        data: this.props.series,
                    }
                ]
            },
            options: {}
        });
    },
    shouldComponentUpdate:function(){
        return false;
    },
    render:function () {
        return (
            <canvas ref="container" width="400" height="200"></canvas>
        )
    }
});

module.exports = Chart;