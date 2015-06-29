define(function (require) {

  // react
  var React = require('react');

  // actions
  var MessageActionCreator = require('actions/MessageActionCreator');

  // constants
  var ENTER_KEY = 13;

  var UserStore = require('stores/UserStore');

  var MessageInput = React.createClass({

    getInitialState () {
      return {
        value: ''
      };
    },

    change (event) {
      this.setState({value: event.target.value});
    },

    keyup (event) {
      if (event.keyCode === ENTER_KEY)
        this.sendMessage();
    },

    sendMessage () {
      MessageActionCreator.sendMessage(this.state.value);
      this.setState({value: this.getInitialState().value});
    },

    render () {
      return (
        <div className="message-input">
          <input type="text" className="input" value={this.state.value} onChange={this.change} onKeyUp={this.keyup} />
        </div>
      );
    }
  });

  return MessageInput;
});
