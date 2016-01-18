window.HomeView = Backbone.View.extend({
  template: JST["templates/landing_page.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
      var report = new Option({ name: "Report", id: "Report", image_url: "static/css/images/banner.png"});
      var light = new Option({ name: "Light", id: "Light", image_url: "static/css/images/banner.png"});
      var maps = new Option({ name: "Maps", id: "Maps", image_url: "static/css/images/banner.png"});
      var analytics = new Option({ name: "Analytics", id: "Analytics", image_url: "static/css/images/banner.png"});
      var settings = new Option({ name: "Settings", id: "Settings", image_url: "static/css/images/banner.png"});
      var contact = new Option({ name: "Contact", id: "Contact", image_url: "static/css/images/banner.png"});

      var myOptions = new Options([report, light, maps, analytics, settings, contact]);

      $(this.el).html(this.template({options: myOptions.toJSON()}));
      return this;
    },
    events: {
      "click .image": "doSearch"
    },
    doSearch: function( e ){
      // Button clicked, you can access the element that was clicked with event.currentTarget
      clicked_label = $(e.currentTarget).attr('id');

      // Storing clicked option to session.
      var label_session = localStorage['label'];
      localStorage['label'] = clicked_label;
      
      var result_view = new ResultView({clicked_label: clicked_label });
    }
});