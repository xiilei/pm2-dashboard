var React = require('react');
var Button = require('react-bootstrap/lib/Button');

var LoadingButton = React.createClass({
    getInitialState:function(){
        return {isLoading:false};
    },

    getDefaultProps:function(){
        return {bsStyle:'default',disabled:false};
    },

    handleClick:function(){
        this.setState({isLoading: true});
        if(this.props.onStart){
            this.props.onStart();
        }
        setTimeout(function(){
          if(this.props.onEnd){
             this.props.onEnd();
          }
          this.setState({isLoading: false});
        }.bind(this), 2000);
    },

    render:function() {
        var isLoading = this.state.isLoading;
        return (
            <Button 
            onClick={this.handleClick} 
            bsStyle={this.props.bsStyle} 
            bsSize='small' 
            disabled={this.props.disabled}>
            {isLoading ? 'loading...' : this.props.children}
            </Button>
        )
    }
});

module.exports = LoadingButton;