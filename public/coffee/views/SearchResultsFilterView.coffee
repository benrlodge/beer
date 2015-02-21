View = require './View'

module.exports = class SearchResultsFilterView extends View

  el: '#search-results-filter'



  initialize: -> 
    $(@el).empty().unbind()
    @filterTempl = @compile '#searchResultsFilter'
    @render()


  render: ->
    $(@el).append @filterTempl()
