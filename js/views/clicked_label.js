var ResultView = Backbone.View.extend({
	template: JST["templates/apple.hbs"],
  	initialize: function(options){
      this.render(options);
    },
    render: function(options){
		var variables = { search_label: clicked_label };
	    this.$el.append(this.template(variables));
    },
    events: {
      "click input[type=image]": "doBack"
    },
    doBack: function(event){
      	var landing_view = new LandingView({ el: $("#container") });
      	// $.mobile.changePage($(result_view.el), {transition: 'slide', changeHash:false});
    }
});