var React = require('react');
var LoadingButton = require('./LoadingButton');
var Glyphicon = require('react-bootstrap/lib/Glyphicon');


var Controls = React.createClass({
    getInitialState:function(){
        return {disabled:false};
    },

    handleStart:function(){
        this.setState({'disabled':true});
    },

    handleEnd:function(){
        this.setState({'disabled':false});
    },

    render:function() {
        var disabled = this.state.disabled;
        return (
            <div className="row controls">
                <LoadingButton
                disabled={disabled}
                bsStyle="primary"
                onStart={this.handleStart}
                onEnd={this.handleEnd}><Glyphicon glyph="plus" />new</LoadingButton>
                <LoadingButton
                disabled={disabled}
                onStart={this.handleStart}
                onEnd={this.handleEnd}><Glyphicon glyph="play" />start</LoadingButton>
                <LoadingButton
                disabled={disabled}
                onStart={this.handleStart}
                onEnd={this.handleEnd}><Glyphicon glyph="refresh" />restart</LoadingButton>
                <LoadingButton
                disabled={disabled}
                bsStyle="danger"
                onStart={this.handleStart}
                onEnd={this.handleEnd}><Glyphicon glyph="stop" />stop</LoadingButton>
            </div>
        )
    }
});

module.exports = Controls;