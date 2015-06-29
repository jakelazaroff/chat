define(function (require) {

  var React = require('react');

  var MessageInput = require('components/messages/message-input/MessageInput');
  var MessageList = require('components/messages/message-list/MessageList');
  var HandleModal = require('components/users/handle-modal/HandleModal');

  var Application = React.createClass({
    render () {
      return (
        <div className="application">
          <HandleModal />
          <MessageList />
          <MessageInput />
        </div>
      );
    }
  });

  return Application;
});
