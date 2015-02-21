beer = require '../models/Beer'

module.exports = class BeerStyleCollection extends Backbone.Collection
  model: beer
  url: '/api/beer/category/'
