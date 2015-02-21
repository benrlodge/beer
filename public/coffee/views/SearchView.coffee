View = require './View'
# SearchResultsView = require './SearchResultsView'
SearchResultsFilterView = require './SearchResultsFilterView'

module.exports = class SearchView extends View

  el: '#search-box'
  input: '#searchBox'

  initialize: -> 
    console.log 'Search View'
    @searchTempl = @compile '#SearchView'
    @render()

  events:
    "keyup #searchBox" : "keyPressEventHandler"


  keyPressEventHandler: (e) ->
    if(e.keyCode == 13)
      @searchTerm = $(e.currentTarget).val().trim()
      $(@input).attr('disabled','disabled')
      @search()

  search: ->
    encodeSearch = encodeURIComponent(@searchTerm)
    Backbone.history.navigate("search/#{encodeSearch}", { trigger: true })


  render: ->
    console.log 'rendering'
    $(@el).html (@searchTempl)
