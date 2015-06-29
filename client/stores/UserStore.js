define(function (require) {

  // libraries
  var _ = require('_');
  var Relate = require('relate');

  // stores
  var BaseStore = require('stores/BaseStore');

  var UserStore = function () {
    BaseStore.apply(this, arguments);
  };

  UserStore.prototype = Object.create(BaseStore.prototype);
  UserStore.prototype.constructor = UserStore;

  UserStore.prototype.listen = function (action) {
    switch(action.type) {

      case 'user:connect':
        this.add({
          id: _.uniqueId(),
          handle: action.handle
        });
        this.trigger('add');
        break;
    }
  };

  UserStore.prototype.currentUser = function (user) {
    console.log(user);
  };

  Relate.collection.users = UserStore;

  return Relate.createCollection('users');
});
