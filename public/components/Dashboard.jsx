var React = require('react');
var Menu = require('./Menu');
var Nav = require('./Nav');
var Metrics = require('./Metrics');

var Dashboard = React.createClass({
    getInitialState:function(){
        return {minHeight:'768px'};
    },
    componentDidMount:function(){
        var self = this;
        var win = jQuery(window);
        win.on('resize',function(){
            self.setState({minHeight:win.height()});
        }).trigger('resize');
    },
    render:function(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="menu col-xs-2"><Menu /></div>
                    <div className="wrapper col-xs-10" style={{minHeight:this.state.minHeight}}>
                        <Nav name="Mock Server" />
                        <Metrics />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;