define([
  'jquery',
  'underscore',
  'backbone'
  
], function($, _, Backbone) {

return Backbone.View.extend({

	tagName : "li",

	render: function() {
	
		var _this = this;
	
		_this.$el.append(_this.model.get("title")+ " "+ "<a href='file://"+location.pathname+"#details/"+_this.model.get("id")+"' class='showMeDetails'> Show me Details </a> ");
	
		return this;
	},
	
	
});




});
