var React = require('react');
var $ = require('jquery');

var Dashboard = React.createClass({
    displayName:'Dashboard',
    getInitialState:function(){
        return {minHeight:'100%'};
    },
    componentDidMount:function(){
        var self = this;
        var win = $(window);
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
                        <Nav name="Server" />
                        <Metrics />
                    </div>
                </div>
            </div>
        );
    }
});

var Menu = React.createClass({
    displayName:'Menu',
    render:function(){
        return (
            <nav className="navbar-default navbar-static-side">
            <ul className="nav nav-pills nav-stacked nav-pills-stacked-example">

                <li className="active">
                    <a href="#">Fork<span className="badge pull-right">5</span></a>
                </li>
                <li>
                    <a href="#">Cluster<span className="badge pull-right">4</span></a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
            </ul>
            </nav>
        );
    }
});

var Nav = React.createClass({
    displayName:'Nav',
    getInitialState:function(){
        return {now:new Date}
    },
    componentDidMount:function(){
        var self = this;
        setInterval(function(){
            self.setState({now:new Date});
        },1000);
    },
    render:function(){
        return (
           <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                    <b className="navbar-brand">{this.props.name}</b>
                </div>
                <div class="collapse navbar-collapse">
                    <div className="nav navbar-nav">
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <li><a href="#">{this.state.now.toString()}</a></li>
                        <li><a href="#"><span className="label label-success">online</span></a></li>
                    </div>
                </div>
              </div>
          </nav>
        )
    }
});

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

module.exports = Dashboard;