var React = require('react');
var Button = require('./Button');

var Controls = React.createClass({
    render:function() {
        return (
            <div className="row controls">
                    <Button value="new"/>
                    <Button value="restart"/>
                    <Button value="stop"/>
                    <Button value="start"/>
            </div>
        )
    }
});

module.exports = Controls;