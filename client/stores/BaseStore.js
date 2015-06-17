define(function (require) {

  var Collection = require('relate').Collection;

  var Dispatcher = require('dispatcher/dispatcher');

  var BaseStore = function () {
    if (!arguments.length)
      return;

    Collection.apply(this, arguments);
    Dispatcher.register(this.listen.bind(this));
  };

  BaseStore.prototype = new Collection();
  BaseStore.prototype.constructor = BaseStore;

  BaseStore.prototype.listen = function (action) {
    throw new Error('BaseStore.prototype.listen must be overridden');
  }

  return BaseStore;
});
