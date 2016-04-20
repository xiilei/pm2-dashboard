var React = require('react');

var Host = React.createClass({
    displayName:'Host',
    render: function() {
        return (
        <div className="panel panel-default">
        <div className="panel-heading">{this.props.name}</div>
            <div className="panel-body">
            {this.props.apps}
            </div>
        </div>
        );
    }
});

var Dashboard = React.createClass({
    displayName:'Dashboard',
    render:function(){
         var hosts = this.props.hosts.map(function(host) {
          return (
            <Host name={host.name} apps={host.apps}  key={host.name}/>
          );
        });
        return (
            <div className="container">
                {hosts}
            </div>
        )
    }
});

module.exports = Dashboard;