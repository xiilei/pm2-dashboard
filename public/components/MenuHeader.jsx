var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');

var MenuHeader = React.createClass({
    getInitialState:function(){
        return {showHosts:false};
    },
    close:function() {
      this.setState({ showModal: false });
    },

    open:function() {
      this.setState({ showModal: true });
    },
    render:function(){
        return(
            <li className="nav-header">
                <h3>{this.props.title} <a href="#" onClick={this.open}>switch</a></h3>
                 <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                  <Modal.Header closeButton>
                        <Modal.Title>Hosts</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Nothing here.
                  </Modal.Body>
                 </Modal>
            </li>
        )
    }
});

module.exports = MenuHeader;