var React = require('react');

var Nav = React.createClass({
    componentWillMount:function(){
        this.timer = null;
    },
    getInitialState:function(){
        return {now:new Date}
    },
    componentDidMount:function(){
        var self = this;
        this.timer = setInterval(function(){
            self.setState({now:new Date});
        },1000);
    },
    componentWillUnmount:function(){
        if(this.timer){
            clearInterval(this.timer);
        }
    },
    render:function(){
        return (
           <nav className="navbar navbar-default prw-navbar">
              <div className="container-fluid">
                <div className="navbar-header">
                    <strong className="navbar-brand">{this.props.name}</strong>
                </div>
                <div class="collapse navbar-collapse">
                    <div className="nav navbar-nav">
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="label label-success">online</span></a></li>
                        <li><a href="#">{this.state.now.toString()}</a></li>
                        <li><a href="#"><i className="glyphicon glyphicon-refresh"></i></a></li>
                    </div>
                </div>
              </div>
          </nav>
        )
    }
});

module.exports = Nav;