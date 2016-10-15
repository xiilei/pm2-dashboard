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
        function resize(){
            self.setState({minHeight:window.document.documentElement.clientHeight});
        }
        window.addEventListener('resize',resize);
        resize();
        this.loadCurrentStat();
    },

    loadCurrentStat:function(){
        
    },

    render:function(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="menu col-lg-2"><Menu /></div>
                    <div className="app col-lg-10" style={{minHeight:this.state.minHeight}}>
                        <Nav name="Mock Server" />
                        <Metrics />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;