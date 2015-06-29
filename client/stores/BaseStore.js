define(function (require) {

  var Observable = require('observable');
  var Collection = require('relate').Collection;

  var Dispatcher = require('dispatcher/dispatcher');

  var BaseStore = function () {
    if (this.constructor === BaseStore)
      throw new Error('BaseStore must be extended');

    Collection.apply(this, arguments);
    Observable(this);
    Dispatcher.register(this.listen.bind(this));
  };

  BaseStore.prototype = Object.create(Collection.prototype);
  BaseStore.prototype.constructor = BaseStore;

  BaseStore.prototype.listen = function (action) {
    throw new Error('BaseStore.prototype.listen must be overridden');
  }

  return BaseStore;
});
