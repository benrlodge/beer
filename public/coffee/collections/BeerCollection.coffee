beer = require '../models/Beer'

module.exports = class BeerCollection extends Backbone.Collection
  model: beer

  url: '/api/beer/beers/'
