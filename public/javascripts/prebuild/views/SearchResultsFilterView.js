(function() {
  var SearchResultsFilterView, View,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  View = require('./View');

  module.exports = SearchResultsFilterView = (function(_super) {
    __extends(SearchResultsFilterView, _super);

    function SearchResultsFilterView() {
      return SearchResultsFilterView.__super__.constructor.apply(this, arguments);
    }

    SearchResultsFilterView.prototype.el = '#search-results-filter';

    SearchResultsFilterView.prototype.initialize = function() {
      $(this.el).empty().unbind();
      this.filterTempl = this.compile('#searchResultsFilter');
      return this.render();
    };

    SearchResultsFilterView.prototype.render = function() {
      return $(this.el).append(this.filterTempl());
    };

    return SearchResultsFilterView;

  })(View);

}).call(this);
