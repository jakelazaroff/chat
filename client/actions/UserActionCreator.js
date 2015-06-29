define(function (require) {

  // dispatcher
  var Dispatcher = require('dispatcher/dispatcher');

  // actions
  var ActionCreatorFactory = require('services/ActionCreatorFactory');

  return ActionCreatorFactory({

    enter: {
      event: 'user:enter',
      method: function (event, user) {
        Dispatcher.dispatch(_.extend({}, {handle: user.handle}, {type: event + ':attempt'}));
      }
    },

    connectUser: {
      event: 'user:connect',
      socket: true,
      method: function (event, user) {
        Dispatcher.dispatch(_.extend({}, {handle: user.handle}, {type: event}));
      }
    }
  });
});
