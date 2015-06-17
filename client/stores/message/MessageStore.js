define(function (require) {

  var Relate = require('relate');

  var BaseStore = require('stores/BaseStore');

  var MessageStore = function () {
    BaseStore.apply(this, arguments);
  };

  MessageStore.prototype = new BaseStore();
  MessageStore.prototype.constructor = MessageStore;

  MessageStore.prototype.listen = function (action) {
    switch(action.type) {

      case 'message:send':
        this.add({
          text: action.text
        });
        console.log(this);
        break;
    }
  };

  Relate.collection.messages = MessageStore;

  return Relate.createCollection('messages');
});
