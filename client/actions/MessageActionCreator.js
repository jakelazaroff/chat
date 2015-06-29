define(function (require) {

  // dispatcher
  var Dispatcher = require('dispatcher/dispatcher');

  // actions
  var ActionCreatorFactory = require('services/ActionCreatorFactory');

  return ActionCreatorFactory({
    sendMessage: {
      event: 'message:send',
      socket: true,
      method: function (event, text) {
        Dispatcher.dispatch(_.extend({}, {text: text}, {type: event}));
      }
    }
  });
});
