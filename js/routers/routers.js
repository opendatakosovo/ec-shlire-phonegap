var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "page1":"page1",
    },

    initialize:function () {
    	var self = this;
        // Handle back button throughout the application
       $(document).on('click', '.back', function(e) {
		    e.preventDefault();
		    self.back = true;
		    window.history.back();
		});

       $(document).on("navigate", function (event, data) {
		  var direction = data.state.direction;
		  if (direction == 'back') {
		  	console.log('back')
		    event.preventDefault();
		    self.back = true;
		    window.history.back();
		  }
		});

        this.firstPage = true;
    },

    home:function () {
        this.changePage(new HomeView());
    },

    page1:function () {
        this.changePage(new ResultView());
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = "flip";

        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }

        // If from back button is clicked than slide page reverse.
        if (this.back == true) { 
			$.mobile.changePage($(page.el), {changeHash: false, transition: transition, reverse: this.back});
		} else {
			$.mobile.changePage($(page.el), {changeHash: false, transition: transition });
		}
		this.back = false;
    }
});

