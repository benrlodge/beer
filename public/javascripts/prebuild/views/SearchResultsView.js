(function() {
  var BeerCollection, BeerModalView, SearchResultsView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./View');

  BeerCollection = require('../Collections/BeerCollection');

  BeerModalView = require('./BeerModalView');

  module.exports = SearchResultsView = (function(_super) {
    __extends(SearchResultsView, _super);

    function SearchResultsView() {
      return SearchResultsView.__super__.constructor.apply(this, arguments);
    }

    SearchResultsView.prototype.el = '#search-results';

    SearchResultsView.prototype.input = '#searchBox';

    SearchResultsView.prototype.events = {
      "click [data-action='beer-detail']": "showDetail"
    };

    SearchResultsView.prototype.initialize = function(options) {
      $(this.el).empty().unbind();
      this.loader('show');
      this.searchTerm = options.term;
      this.searchResultsTempl = this.compile('#beerTemplate');
      this.collection = new BeerCollection();
      this.listenTo(this.collection, 'sync', this.render);
      return this.collection.fetch({
        data: {
          query: options.term
        },
        processData: true,
        error: (function(_this) {
          return function(res) {
            if (res.length === 0) {
              return _this.noResults();
            }
          };
        })(this)
      });
    };

    SearchResultsView.prototype.noResults = function() {
      return console.log('No results');
    };

    SearchResultsView.prototype.showDetail = function(e) {
      var beer, beerID, modalView;
      e.preventDefault();
      beerID = $(e.currentTarget).data('beer-id');
      beer = this.collection.get(beerID);
      return modalView = new BeerModalView({
        model: beer
      });
    };

    SearchResultsView.prototype.render = function() {
      var model, _i, _len, _ref, _results;
      console.log('SearchResultsView: Render');
      setTimeout(((function(_this) {
        return function() {
          _this.loader('hide');
        };
      })(this)), 1000);
      $(this.input).removeAttr('disabled');
      console.log(_.pluck(this.collection.models, 'attributes'));
      $(this.el).html(this.collection);
      if (this.collection.models.length === 0) {
        console.log('No results');
      }
      _ref = this.collection.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        model = _ref[_i];
        _results.push($(this.el).append(this.searchResultsTempl(model.toJSON())));
      }
      return _results;
    };

    return SearchResultsView;

  })(View);

}).call(this);
