module.exports = class View extends Backbone.View


  compile: (templ) ->
    Handlebars.compile($(templ).html())


  loader: (state) ->
  	if state is 'show' then $('.beer-loader').show() else $('.beer-loader').hide()
  		