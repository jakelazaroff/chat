define(function (require) {

  var React = require('react');

  var MessageActionCreator = require('actions/MessageActionCreator');

  var ENTER_KEY = 13;

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
