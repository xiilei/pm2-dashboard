var React = require('react');

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

module.exports = Nav;