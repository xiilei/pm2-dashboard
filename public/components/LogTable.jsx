var React = require('react');

var LogTable = React.createClass({
    render:function(){
        return (
            <table className="table log-table">
                 <tbody> 
                 <tr className="first-line"> 
                    <td>2016-05-01 22:19:01</td> 
                    <td>app:mock server start</td>
                 </tr> 
                 <tr> 
                    <td>2016-05-01 22:19:02</td> 
                    <td>app:mock server start listen on port 9615</td>
                  </tr>
                </tbody> 
            </table>
        );
    }
});

module.exports = LogTable;