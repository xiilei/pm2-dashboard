var moment = require('moment');
var React = require('react');
var BNav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var Navbar = require('react-bootstrap/lib/Navbar');
var Label  = require('react-bootstrap/lib/Label');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');

var Nav = React.createClass({
    componentWillMount:function(){
        this.timer = null;
    },
    getInitialState:function(){
        return {now:moment().format('YYYY-MM-DD hh:mm:ss')}
    },
    componentDidMount:function(){
        var self = this;
        this.timer = setInterval(function(){
            self.setState({now:moment().format('YYYY-MM-DD hh:mm:ss')});
        },1000);
    },
    componentWillUnmount:function(){
        if(this.timer){
            clearInterval(this.timer);
        }
    },
    render:function(){
        return (
        <Navbar className="prw-navbar" fluid={true}>
             <Navbar.Header>
                <Navbar.Brand>
                    <strong className="navbar-brand">{this.props.name}</strong>
                </Navbar.Brand>
             </Navbar.Header>
             <Navbar.Collapse>
                <BNav pullRight>
                    <NavItem><Label bsStyle="success">online</Label></NavItem>
                    <NavItem>{this.state.now.toString()}</NavItem>
                    <NavItem><Glyphicon glyph="refresh" /></NavItem>
                </BNav>
             </Navbar.Collapse>
        </Navbar>
        );
    }
});

module.exports = Nav;