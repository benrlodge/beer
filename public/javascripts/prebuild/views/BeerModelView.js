(function() {
  var BeerModelView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./View');

  module.exports = BeerModelView = (function(_super) {
    __extends(BeerModelView, _super);

    function BeerModelView() {
      return BeerModelView.__super__.constructor.apply(this, arguments);
    }

    BeerModelView.prototype.initialize = function(options) {
      console.log('BeerModelView: Init');
      return console.log(options);
    };

    return BeerModelView;

  })(View);

}).call(this);
