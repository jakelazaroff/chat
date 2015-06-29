define(function (require) {

  // libraries
  var _ = require('_');
  var Relate = require('relate');

  // stores
  var BaseStore = require('stores/BaseStore');

  var MessageStore = function () {
    BaseStore.apply(this, arguments);
  };

  MessageStore.prototype = Object.create(BaseStore.prototype);
  MessageStore.prototype.constructor = MessageStore;

  MessageStore.prototype.listen = function (action) {
    switch(action.type) {

      case 'message:send':
        this.add({
          id: _.uniqueId(),
          text: action.text
        });
        this.trigger('add');
        break;
    }
  };

  Relate.map.messages = {user: 'users'};
  Relate.collection.messages = MessageStore;

  return Relate.createCollection('messages');
});
