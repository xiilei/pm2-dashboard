var React = require('react');

require('flotjs');

/**
 * flot charts
 */
var Chart = React.createClass({
    getDefaultProps:function(){
        return {series:[],height:'200px'};
    },
    componentDidMount:function(){
        var container = jQuery(this.refs.container);
        var series = [{
            data:this.props.series,
            lines: {
                fill: true
            }
        }];

        var plot = jQuery.plot(container, series, {
            grid: {
                color: "#999999",
                tickColor: "#D4D4D4",
                borderWidth:0,
                minBorderMargin: 20,
                labelMargin: 10,
                backgroundColor: {
                    colors: ["#ffffff", "#ffffff"]
                },
                margin: {
                    top: 8,
                    bottom: 20,
                    left: 20
                },
                markings: function(axes) {
                    var markings = [];
                    var xaxis = axes.xaxis;
                    for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                        markings.push({
                            xaxis: {
                                from: x,
                                to: x + xaxis.tickSize
                            },
                            color: "#fff"
                        });
                    }
                    return markings;
                }
            },
            colors: ["#1ab394"],
            xaxis: {
                // tickFormatter: function() {
                //     return "";
                // }
            },
            yaxis: {
                min: 0,
                max: 110
            },
            legend: {
                show: true
            }
    });
    },
    shouldComponentUpdate:function(){
        return false;
    },
    render:function () {
        return (
            <div ref="container" style={{height:this.props.height}}></div>
        )
    }
});

module.exports = Chart;