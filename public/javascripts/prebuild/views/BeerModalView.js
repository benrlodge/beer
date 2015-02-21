(function() {
  var BeerModalView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./View');

  module.exports = BeerModalView = (function(_super) {
    __extends(BeerModalView, _super);

    function BeerModalView() {
      return BeerModalView.__super__.constructor.apply(this, arguments);
    }

    BeerModalView.prototype.el = '#beerModal';

    BeerModalView.prototype.id = 'base-modal';

    BeerModalView.prototype.className = 'modal';

    BeerModalView.prototype.template = 'modals/BaseModal';

    BeerModalView.prototype.events = {
      "click .close-modal": "teardown",
      "click #cover": "teardown",
      'keydown .beer-modal': 'keyAction'
    };

    BeerModalView.prototype.keyAction = function(e) {
      var code;
      console.log('key codeing');
      code = e.keyCode || e.which;
      if (code === 37 || code === 39) {
        return console.log('go left or right');
      }
    };

    BeerModalView.prototype.initialize = function(options) {
      var abv, ibu, limit;
      this.model = options.model;
      this.modalTempl = this.compile('#modalTemplate');
      this.render();
      ibu = this.model.get('ibu');
      abv = this.model.get('abv');
      if (abv > 10) {
        limit = 20;
      } else {
        limit = 12;
      }
      if (ibu != null) {
        new JustGage({
          id: "ibuGauge",
          value: ibu,
          min: 0,
          max: 140,
          title: "IBUs"
        });
      }
      if (abv != null) {
        return new JustGage({
          id: "abvGauge",
          value: abv,
          min: 0,
          max: limit,
          title: "% ABV"
        });
      }
    };

    BeerModalView.prototype.teardown = function() {
      return this.$el.unbind().empty();
    };

    BeerModalView.prototype.render = function() {
      console.log('render');
      this.$el.html(this.modalTempl(this.model.toJSON()));
      return this;
    };

    return BeerModalView;

  })(View);

}).call(this);
