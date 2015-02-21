View = require './View'

module.exports = class BeerModalView extends View

    el: '#beerModal'
    id: 'base-modal'
    className: 'modal'
    template: 'modals/BaseModal'

    events:
      "click .close-modal": "teardown"
      "click #cover" : "teardown"
      'keydown .beer-modal': 'keyAction'


    keyAction: (e) ->
      console.log 'key codeing'
      code = e.keyCode || e.which
      # if(code == 65)
      if code is 37 or code is 39
        console.log 'go left or right'


    initialize: (options) ->
      
      # $('.beer-modal').focus()

      @model = options.model
      @modalTempl = @compile '#modalTemplate'
      @render()

      ibu = @model.get('ibu')
      abv = @model.get('abv')
      if abv > 10 then limit = 20 else limit = 12

      if ibu?
        new JustGage
          id: "ibuGauge"
          value: ibu
          min: 0
          max: 140
          title: "IBUs"

    
      if abv?
        new JustGage
          id: "abvGauge"
          value: abv
          min: 0
          max: limit
          title: "% ABV"


    teardown: ->
      @$el.unbind().empty()

    render: ->
      console.log 'render'
      @$el.html @modalTempl(@model.toJSON())
      @

