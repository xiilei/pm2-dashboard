var React = require('react');
var MenuHeader = require('./MenuHeader');
var NavItem = require('react-bootstrap/lib/NavItem');
var Nav = require('react-bootstrap/lib/Nav');
var Badge = require('react-bootstrap/lib/Badge');

var Menu = React.createClass({
    getInitialState:function(){
        return {activeKey:1};
    },
    handleSelect:function(selectedKey){
        this.setState({activeKey:selectedKey});
    },

    render:function(){
        return (
            <Nav bsStyle="pills" stacked
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}>
                <MenuHeader title="localhost"/>
                <NavItem eventKey={1} href="#/app/fork">Fork <Badge pullRight>5</Badge></NavItem>
                <NavItem eventKey={2} href="#/app/cluster">Cluster <Badge pullRight>4</Badge></NavItem>
                <NavItem eventKey={3} href="#/app/messages">Messages</NavItem>
            </Nav>
        );
    }
});

module.exports = Menu;