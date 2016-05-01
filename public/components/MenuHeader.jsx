var React = require('react');


var MenuHeader = React.createClass({
    render:function(){
        return(
            <li className="nav-header">
                <h3>{this.props.title} <a href="#">switch</a></h3>
            </li>
        )
    }
});

module.exports = MenuHeader;