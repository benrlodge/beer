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
