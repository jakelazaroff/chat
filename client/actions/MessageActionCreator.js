define(function (require) {

  var Dispatcher = require('dispatcher/dispatcher');

  return {
    sendMessage: function (text) {
      Dispatcher.dispatch({
        type: 'message:send',
        text: text
      });
    }
  };

});
