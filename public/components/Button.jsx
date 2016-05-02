var React = require('react');

var Button = React.createClass({
    onclick:function(target){
        console.dir(target);
    },
    render:function() {
        return (
            <button type="button" className="btn btn-default" 
            onClick={this.onclick}>
            {this.props.value}
            </button>
        )
    }
});

module.exports = Button;