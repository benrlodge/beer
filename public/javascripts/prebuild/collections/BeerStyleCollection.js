(function() {
  var BeerStyleCollection, beer,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  beer = require('../models/Beer');

  module.exports = BeerStyleCollection = (function(_super) {
    __extends(BeerStyleCollection, _super);

    function BeerStyleCollection() {
      return BeerStyleCollection.__super__.constructor.apply(this, arguments);
    }

    BeerStyleCollection.prototype.model = beer;

    BeerStyleCollection.prototype.url = '/api/beer/category/';

    return BeerStyleCollection;

  })(Backbone.Collection);

}).call(this);
