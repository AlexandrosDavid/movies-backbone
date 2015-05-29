var MovieView =  Backbone.View.extend({

	tagName : "li",

	initialize : function() {
		console.log("init movie view");
	},
	
	render: function() {
	
		var _this = this;
	
		_this.$el.append(_this.model.get("title"));
	
		return this;
	}
	
});



