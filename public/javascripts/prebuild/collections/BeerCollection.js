(function() {
  var BeerCollection, beer,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  beer = require('../models/Beer');

  module.exports = BeerCollection = (function(_super) {
    __extends(BeerCollection, _super);

    function BeerCollection() {
      return BeerCollection.__super__.constructor.apply(this, arguments);
    }

    BeerCollection.prototype.model = beer;

    BeerCollection.prototype.url = '/api/beer/beers/';

    return BeerCollection;

  })(Backbone.Collection);

}).call(this);
