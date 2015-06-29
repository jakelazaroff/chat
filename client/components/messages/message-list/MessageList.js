define(function (require) {

  var React = require('react');

  var MessageStore = require('stores/MessageStore');

  var MessageList = React.createClass({

    getInitialState () {
      return this.getState();
    },

    getState () {
      return {messages: MessageStore.get()};
    },

    componentWillMount () {
      this.change.id = MessageStore.on('add', this.change);
    },

    change () {
      this.setState(this.getState());
    },

    render () {
      return (
        <ul className="message-list">
          { this.state.messages.map(function (item) {
            return <li>{item.text}</li>;
          }) }
        </ul>
      );
    },

    componentWillUnmount () {
      MessageStore.off('add', this.change.id);
    }
  });

  return MessageList;
});
