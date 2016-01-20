var Options = Backbone.Collection.extend({
	model: Option
});

var SendData = Backbone.Collection.extend({
	url:'http://0.0.0.0:5000/harassment/save'
});
