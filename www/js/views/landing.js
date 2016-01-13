window.HomeView = Backbone.View.extend({
  template: JST["templates/landing_page.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
      var apple = new Option({ name: "Apple", id: "apple", image_url: "static/css/images/apple.jpg"});
      var banana = new Option({ name: "Banana", id: "banana", image_url: "static/css/images/banana.jpg"});
      var durian = new Option({ name: "Durian", id: "durian", image_url: "static/css/images/durian.jpg"});
      var orange = new Option({ name: "Orange", id: "orange", image_url: "static/css/images/orange.jpg"});
      var pear = new Option({ name: "Pear", id: "pear", image_url: "static/css/images/pear.jpg"});
      var peach = new Option({ name: "Peach", id: "peach", image_url: "static/css/images/peach.jpg"});

      var myOptions = new Options([apple, banana, durian, orange, pear, peach]);

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