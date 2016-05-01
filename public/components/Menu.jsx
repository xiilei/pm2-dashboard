var React = require('react');

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

module.exports = Menu;