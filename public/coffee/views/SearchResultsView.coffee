View = require './View'
BeerCollection = require '../Collections/BeerCollection'
BeerModalView = require './BeerModalView'

module.exports = class SearchResultsView extends View

  el: '#search-results'
  input: '#searchBox'

  events:
    "click [data-action='beer-detail']": "showDetail"



  initialize: (options) -> 
    $(@el).empty().unbind()
    @loader('show')

    @searchTerm = options.term
    @searchResultsTempl = @compile '#beerTemplate'
    @collection = new BeerCollection()
    @listenTo @collection, 'sync', @render
    
    @collection.fetch
      data: query: options.term
      processData: true
      error: (res) =>
        if res.length is 0
          @noResults()
    

  noResults: ->
    console.log 'No results'


  showDetail: (e) ->
    e.preventDefault()
    beerID = $(e.currentTarget).data('beer-id')
    beer = @collection.get(beerID)    
    
    modalView = new BeerModalView({model: beer})


  render: ->
    console.log 'SearchResultsView: Render'
    setTimeout (=>
      @loader('hide')
      return
    ), 1000

    $(@input).removeAttr('disabled')
    console.log _.pluck @collection.models, 'attributes'
    $(@el).html(@collection)

    if (@collection.models).length is 0
      console.log 'No results'

    for model in @collection.models
      $(@el).append @searchResultsTempl(model.toJSON())
