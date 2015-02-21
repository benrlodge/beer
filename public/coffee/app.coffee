Router = require './router'
glasses = require './data/glasses'


router = new Router()
Backbone.history.start()



## Handlebars Helpers

Handlebars.registerHelper 'withLast', (list, options) ->
  options.fn _.last list

Handlebars.registerHelper 'glassImage', (id) ->
  _.findWhere(glasses, {id: id}).image
