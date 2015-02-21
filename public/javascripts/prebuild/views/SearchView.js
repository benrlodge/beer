(function() {
  var SearchResultsFilterView, SearchView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./View');

  SearchResultsFilterView = require('./SearchResultsFilterView');

  module.exports = SearchView = (function(_super) {
    __extends(SearchView, _super);

    function SearchView() {
      return SearchView.__super__.constructor.apply(this, arguments);
    }

    SearchView.prototype.el = '#search-box';

    SearchView.prototype.input = '#searchBox';

    SearchView.prototype.initialize = function() {
      console.log('Search View');
      this.searchTempl = this.compile('#SearchView');
      return this.render();
    };

    SearchView.prototype.events = {
      "keyup #searchBox": "keyPressEventHandler"
    };

    SearchView.prototype.keyPressEventHandler = function(e) {
      if (e.keyCode === 13) {
        this.searchTerm = $(e.currentTarget).val().trim();
        $(this.input).attr('disabled', 'disabled');
        return this.search();
      }
    };

    SearchView.prototype.search = function() {
      var encodeSearch;
      encodeSearch = encodeURIComponent(this.searchTerm);
      return Backbone.history.navigate("search/" + encodeSearch, {
        trigger: true
      });
    };

    SearchView.prototype.render = function() {
      console.log('rendering');
      return $(this.el).html(this.searchTempl);
    };

    return SearchView;

  })(View);

}).call(this);
