window.ResultView = Backbone.View.extend({
	template: JST["templates/apple.hbs"],
  	initialize: function(options){
      this.render(options);
    },
    render: function(options){
		clicked_label = localStorage['label'];
		var variables = { search_label: clicked_label };
        $(this.el).html(this.template(variables));
        return this;
    }
});