define(function (require) {

  // react
  var React = require('react');

  var BaseModal = React.createClass({

    unmount () {
      React.unmountComponentAtNode(this.getDOMNode().parentNode);
    },

    render () {
      return (
        <div className="overlay" onClick={this.unmount}>
          <div className="modal">
            {this.props.children}
          </div>
        </div>
      );
    }
  });

  return BaseModal;
});
