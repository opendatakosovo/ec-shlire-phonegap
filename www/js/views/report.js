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
      var university = new Option({ name: "University", id: "University", image_url: "static/css/images/banner.png"});
      var cafe = new Option({ name: "Cafe / Restaurant", id: "Cafe / Restaurant", image_url: "static/css/images/banner.png"});
      var bar = new Option({ name: "Bar / Nightclub", id: "Bar / Nightclub", image_url: "static/css/images/banner.png"});
      var street = new Option({ name: "Street", id: "Street", image_url: "static/css/images/banner.png"});
      var store = new Option({ name: "Store", id: "Store", image_url: "static/css/images/banner.png"});
      var gym = new Option({ name: "Gym/ Sports activities", id: "Gym/ Sports activities", image_url: "static/css/images/banner.png"});
      var other = new Option({ name: "Other", id: "Other", image_url: "static/css/images/banner.png"});

      var myOptions = new Options([bar, cafe, gym, home, online, other, public_space, public_transit, school, store, street, university, work ]);

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
      var comenting = new Option({ name: "Commenting", id: "Commenting", image_url: "static/img/harassement_icons/02.png"});
      var flashing = new Option({ name: "Flashing", id: "Flashing", image_url: "static/img/harassement_icons/10.png"});
      var homophobic = new Option({ name: "Homophobic Comments", id: "Homophobic_comments", image_url: "static/img/harassement_icons/09.png"});
      var honking = new Option({ name: "Honking", id: "Honking", image_url: "static/img/harassement_icons/04.png"});
      var non_consesual = new Option({ name: "Non-consensual Acts", id: "non_consensual_acts", image_url: "static/img/harassement_icons/11.png"});
      var photographing = new Option({ name: "Photographing", id: "Photographing", image_url: "static/img/harassement_icons/08.png"});
      var shouting = new Option({ name: "Shouting", id: "Shouting", image_url: "static/img/harassement_icons/05.png"});
      var stalking = new Option({ name: "Stalking", id: "Stalking", image_url: "static/img/harassement_icons/06.png"});
      var texting = new Option({ name: "Texting / Calling / E-mailing", id: "Texting_calling_emailing", image_url: "static/img/harassement_icons/07.png"});
      var touching = new Option({ name: "Touching", id: "Touching", image_url: "static/img/harassement_icons/01.png"});
      var whistling = new Option({ name: "Whistling", id: "Whistling", image_url: "static/img/harassement_icons/01.png"});
      var other = new Option({ name: "Other", id: "Other", image_url: "static/img/harassement_icons/12.png"});

      var myOptions = new Options([comenting, flashing, homophobic, honking, non_consesual, photographing, shouting, stalking, texting, touching, whistling, other]);

      $(this.el).html(this.template({options: myOptions.toJSON()}));
      return this;
    }
});


window.PerpetratorTypesView = Backbone.View.extend({
  template: JST["templates/mod_report/perpetrator.hbs"],
    initialize: function(){
      this.render();
    },
    render: function(){

      var acquaintance = new Option({ name: "Acquaintance", id: "Acquaintance", image_url: "static/css/images/banner.png"});
      var boss = new Option({ name: "Boss", id: "Boss", image_url: "static/css/images/banner.png"});
      var client = new Option({ name: "Client / Customer", id: "Client / Customer", image_url: "static/css/images/banner.png"});
      var coworker = new Option({ name: "Co-worker", id: "coworker", image_url: "static/css/images/banner.png"});
      var family = new Option({ name: "Family Member", id: "Family Member", image_url: "static/css/images/banner.png"});
      var friend = new Option({ name: "Friend", id: "Friend", image_url: "static/css/images/banner.png"});
      var partner = new Option({ name: "Partner", id: "Partner", image_url: "static/css/images/banner.png"});
      var public_official = new Option({ name: "Public Official", id: "Public Official", image_url: "static/css/images/banner.png"});
      var shopkeeper = new Option({ name: "Shopkeeper", id: "Shopkeeper", image_url: "static/css/images/banner.png"});
      var stranger = new Option({ name: "Stranger", id: "Stranger", image_url: "static/css/images/banner.png"});
      var teacher = new Option({ name: "Teacher / Professor", id: "Teacher / Professor", image_url: "static/css/images/banner.png"});
      var waiter = new Option({ name: "Waiter", id: "Waiter", image_url: "static/css/images/banner.png"});
      var other = new Option({ name: "Other", id: "Other", image_url: "static/css/images/banner.png"});

      var myOptions = new Options([
        acquaintance, boss, client, coworker, family,
        friend, partner, public_official, shopkeeper,
        stranger, teacher, waiter, other
      ]);

      $(this.el).html(this.template({options: myOptions.toJSON()}));
      return this;
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
