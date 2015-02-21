(function() {
  var Router, SearchResultsView, SearchView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SearchView = require('./views/SearchView');

  SearchResultsView = require('./views/SearchResultsView');

  module.exports = Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      return Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "search/:term": "search",
      "*notFound": "notFound"
    };

    Router.prototype.initialize = function() {
      return new SearchView();
    };

    Router.prototype.notFound = function() {
      return console.log('404');
    };

    Router.prototype.search = function(term) {
      var searchTerm;
      searchTerm = decodeURIComponent(term);
      console.log('search for: ', searchTerm);
      return new SearchResultsView({
        term: searchTerm
      });
    };

    return Router;

  })(Backbone.Router);

}).call(this);
