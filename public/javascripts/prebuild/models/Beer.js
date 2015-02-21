(function() {
  var Beer,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Beer = (function(_super) {
    __extends(Beer, _super);

    function Beer() {
      return Beer.__super__.constructor.apply(this, arguments);
    }

    return Beer;

  })(Backbone.Model);

}).call(this);
