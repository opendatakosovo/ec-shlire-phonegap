var ResultView = Backbone.View.extend({
	template: JST["templates/apple.hbs"],
  	initialize: function(options){
      this.render(options);
    },
    render: function(options){
		var variables = { search_label: clicked_label };
		// console.log(options.clicked_label);
	    this.$el.append(this.template(variables));
    },
    events: {
      "click .image": "doBack"
    },
    doBack: function(event){
      	new LandingView({ el: $("#container") });
      	// $.mobile.changeDiv($(landing_view.el), {transition: 'slide', changeHash:false});
    }
});