define(function (require) {

  // libraries
  var _ = require('_');

  // services
  var io = require('services/io');

  return function (actions) {
    var exports = {};

    _.each(actions, function (action, name) {
      var method = _.bind(action.method, exports, action.event);

      if (action.socket) {
        io.on(action.event, method);
        exports[name] = function (content) {
          method(content);
          io.emit(action.event, content);
        }
      } else {
        exports[name] = method;
      }
    });
    return exports;
  };
});
