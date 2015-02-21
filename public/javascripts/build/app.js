(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../models/Beer":6}],2:[function(require,module,exports){
(function() {
  var Router, glasses, router;

  Router = require('./router');

  glasses = require('./data/glasses');

  router = new Router();

  Backbone.history.start();

  Handlebars.registerHelper('withLast', function(list, options) {
    return options.fn(_.last(list));
  });

  Handlebars.registerHelper('glassImage', function(id) {
    return _.findWhere(glasses, {
      id: id
    }).image;
  });

}).call(this);

},{"./data/glasses":5,"./router":7}],3:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"../models/Beer":6,"dup":1}],4:[function(require,module,exports){
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

},{"../models/Beer":6}],5:[function(require,module,exports){
(function() {
  module.exports = [
    {
      'id': 1,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Flute',
      'image': 'icon-glass-flute.png'
    }, {
      'id': 2,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Goblet',
      'image': 'icon-glass-goblet.png'
    }, {
      'id': 3,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Mug',
      'image': 'icon-glass-mug.png'
    }, {
      'id': 4,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Pilsner',
      'image': 'icon-glass-pilsner.png'
    }, {
      'id': 5,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Pint',
      'image': 'icon-glass-pint.png'
    }, {
      'id': 6,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Snifter',
      'image': 'icon-glass-snifter.png'
    }, {
      'id': 7,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Stange',
      'image': 'icon-glass-stange.png'
    }, {
      'id': 8,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Tulip',
      'image': 'icon-glass-tulip.png'
    }, {
      'id': 9,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Weizen',
      'image': 'icon-glass-weizen.png'
    }, {
      'id': 10,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Oversized Wine Glass',
      'image': 'icon-glass-overwizedwine.png'
    }, {
      'id': 13,
      'createDate': '2012-01-03 02:41:33',
      'name': 'Willi',
      'image': 'icon-glass-willi.jpg'
    }
  ];

}).call(this);

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"./views/SearchResultsView":11,"./views/SearchView":12}],8:[function(require,module,exports){
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

},{"./View":13}],9:[function(require,module,exports){
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

},{"./View":13}],10:[function(require,module,exports){
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

},{"./View":13}],11:[function(require,module,exports){
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

},{"../Collections/BeerCollection":1,"./BeerModalView":8,"./View":13}],12:[function(require,module,exports){
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

},{"./SearchResultsFilterView":10,"./View":13}],13:[function(require,module,exports){
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

},{}]},{},[3,4,6,8,9,10,11,12,13,7,2]);
