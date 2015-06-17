define(function (require) {

  var React = require('react');

  var MessageInput = require('components/messages/message-input/MessageInput');
  var MessageList = require('components/messages/message-list/MessageList');

  var Application = React.createClass({
    render () {
      return (
        <div className="application">
          <MessageList />
          <MessageInput />
        </div>
      );
    }
  });

  return Application;
});
