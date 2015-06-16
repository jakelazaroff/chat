define(function (require) {

  var Dispatcher = require('dispatcher/dispatcher');

  return {
    sendMessage: function (text) {
      Dispatcher.dispatch({
        text: text
      });
    }
  };

});
