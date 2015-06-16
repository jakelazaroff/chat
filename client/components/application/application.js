define(function (require) {

  var React = require('react');
  var MessageInput = require('components/messages/message-input/MessageInput');

  var Application = React.createClass({
    render () {
      return (
        <div className="application">
          <MessageInput />
        </div>
      );
    }
  });

  return Application;
});
