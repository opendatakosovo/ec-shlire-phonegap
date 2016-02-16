window.HomeView = Backbone.View.extend({
  template: JST["templates/landing_page.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
      var report = new Option({ name: "Report", id: "Report", link: "harassmentType", image_url: "static/img/mainscreen/report.png"});
      var maps = new Option({ name: "Maps", id: "Maps", link: "page1", image_url: "static/img/mainscreen/maps.png"});
      var analytics = new Option({ name: "Analytics", id: "Analytics", link: "analyticsPage", image_url: "static/img/mainscreen/analytics.png"});
      var contact = new Option({ name: "Contact", id: "Contact", link: "page1", image_url: "static/img/mainscreen/contact.png"});
      var profile = new Option({ name: "Settings", id: "Settings", link: "settingsPage", image_url: "static/img/mainscreen/profile.png"});

      var myOptions = new Options([report, maps, analytics, contact, profile]);

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