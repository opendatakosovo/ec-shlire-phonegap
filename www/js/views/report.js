window.ReportView = Backbone.View.extend({
  template: JST["templates/mod_report/report_types.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
      var home = new Option({ name: "Home", id: "Home", image_url: "static/css/images/banner.png"});
      var work = new Option({ name: "Work", id: "Work", image_url: "static/css/images/banner.png"});
      var school = new Option({ name: "School", id: "School", image_url: "static/css/images/banner.png"});
      var public_space = new Option({ name: "Public Space", id: "Public Space", image_url: "static/css/images/banner.png"});
      var public_transit = new Option({ name: "Public Transit", id: "Public Transit", image_url: "static/css/images/banner.png"});
      var online = new Option({ name: "Online", id: "Online", image_url: "static/css/images/banner.png"});

      var myOptions = new Options([home, work, school, public_space, public_transit, online]);

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
      localStorage['location'] = clicked_label;

      var result_view = new HarassmentTypeView({clicked_label: clicked_label });
    }
});

window.HarassmentTypeView = Backbone.View.extend({
  template: JST["templates/mod_report/harassment_type.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){
       var verbal = new Option({ name: "Verbal", id: "Verbal", image_url: "static/css/images/banner.png"});
      var stalking = new Option({ name: "Stalking", id: "Stalking", image_url: "static/css/images/banner.png"});
      var groping = new Option({ name: "Groping", id: "Groping", image_url: "static/css/images/banner.png"});
      var assault = new Option({ name: "Assault", id: "Assault", image_url: "static/css/images/banner.png"});
      var flashing = new Option({ name: "Flashing", id: "Flashing", image_url: "static/css/images/banner.png"});
      var racism = new Option({ name: "Racism", id: "Racism", image_url: "static/css/images/banner.png"});

      var myOptions = new Options([verbal, stalking, groping, assault, flashing, racism]);

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
      localStorage['harassType'] = clicked_label;

      var result_view = new GenerateReportView({clicked_label: clicked_label });
    }
});

window.GenerateReportView = Backbone.View.extend({
	template: JST["templates/mod_report/generate_report.hbs"],
  	initialize: function(options){
      this.render(options);
    },
    render: function(options){

      var session_data = {
        report_type: localStorage['label'],
        location: localStorage['location'],
        harassment_type: localStorage['harassType']
      };
        $(this.el).html(this.template(session_data));
        return this;
    }
});