(function() {
  var View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.compile = function(templ) {
      return Handlebars.compile($(templ).html());
    };

    View.prototype.loader = function(state) {
      if (state === 'show') {
        return $('.beer-loader').show();
      } else {
        return $('.beer-loader').hide();
      }
    };

    return View;

  })(Backbone.View);

}).call(this);
