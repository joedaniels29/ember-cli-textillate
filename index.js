'use strict';

module.exports = {
  name: 'ember-cli-textillate',
  included: function(app) {
    this._super.included(app);
    app.import('bower_components/textillate/jquery.textillate.js');
  }
};
