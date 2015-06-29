define(function (require) {

  // react
  var React = require('react');

  var UserActionCreator = require('actions/UserActionCreator');

  var BaseModal = require('components/modals/base-modal/BaseModal');

  var ENTER_KEY = 13;

  var HandleModal = React.createClass({

    getInitialState () {
      return {
        value: ''
      };
    },

    change (event) {
      this.setState({value: event.target.value});
    },

    keyup (event) {
      if (event.keyCode === ENTER_KEY)
        this.enter();
    },

    enter () {
      UserActionCreator.enter({handle: this.state.value});
    },

    render () {
      return (
        <BaseModal>
          <div className="handle-modal">
            <p className="prompt">Enter your handle:</p>
            <input type="text" className="input" value={this.state.value} onChange={this.change} onKeyUp={this.keyup} />
          </div>
        </BaseModal>
      );
    }
  });

  return HandleModal;
});
