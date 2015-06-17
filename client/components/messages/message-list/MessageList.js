define(function (require) {

  var React = require('react');

  var MessageStore = require('stores/message/MessageStore');

  var MessageList = React.createClass({

    getInitialState () {
      return {
        messages: []
      };
    },

    render () {
      return (
        <ul className="message-list">
        </ul>
      );
    }
  });

  return MessageList;
});
