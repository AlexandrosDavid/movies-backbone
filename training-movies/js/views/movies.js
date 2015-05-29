var MoviesView =  Backbone.View.extend({

	tagName : "ul",

	initialize : function() {
		console.log("init movies view");
	},
	
	render: function() {
	
		var _this = this;

		_this.$el.empty();
		
		_this.collection.each(function(model) {
			
			
			var movieView = new MovieView({model:model});
			_this.$el.append(movieView.render().$el);
		
		});
		
		return this;
	}
	
});

var moviesView = new MoviesView({collection:movies});

$("body").html(moviesView.render().$el);

