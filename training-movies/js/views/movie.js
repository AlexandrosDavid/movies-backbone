var MovieView =  Backbone.View.extend({

	tagName : "li",

	initialize : function(options) {
		this.cv = options.connectViews;
		console.log("init movie view");
	},
	
	events: {
		'click .showMeDetails' : 'details'
	},
	
	
	render: function() {
	
		var _this = this;
	
		_this.$el.append(_this.model.get("title")+ " "+ "<button class='showMeDetails'> Show me Details </button> ");
	
		return this;
	},
	
	details : function() {
		 detailRouter.navigate('details/'+this.model.get('id')+'', { trigger: true });
	}
	
});


var cv = _.extend({}, Backbone.Events);
