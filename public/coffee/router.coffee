SearchView = require './views/SearchView'
SearchResultsView = require './views/SearchResultsView'


module.exports = class Router extends Backbone.Router

	routes:
		"search/:term": "search"
		"*notFound" : "notFound"

	initialize: ->
		new SearchView()

	notFound: ->
		console.log '404'

	search: (term) ->
		searchTerm = decodeURIComponent(term)
		console.log 'search for: ', searchTerm
		new SearchResultsView({term: searchTerm})