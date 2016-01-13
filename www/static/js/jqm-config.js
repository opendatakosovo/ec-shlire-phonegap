$(document).on("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').on('pagehide', function (event, ui) {
        $(event.currentTarget).remove();
    });
});

$( document ).ready(function() {
	app = new AppRouter();
	Backbone.history.start();
});