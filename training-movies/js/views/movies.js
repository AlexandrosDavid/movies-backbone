var MoviesView =  Backbone.View.extend({

	tagName : "ul",
	//el:"#movies",
	initialize : function(options) {
		console.log("init movies view");
		
	},
	
	render: function(param) {
	
		var _this = this;
		//alert("sdsd");
		console.log(_this.$el)
		
		_this.$el.empty();
		
		$("#allMovies").show();

		_this.$el.parents("body").find("#movieDetail").hide();
	
		_this.collection.each(function(model) {
		
			var movieView = new MovieView({model:model, connectViews:cv});
			_this.$el.append(movieView.render().$el);
	
		});
		
		
		return this;
	},
	
});




var moviesView = new MoviesView({collection:movies, connectViews:cv});

$("#allMovies").append(moviesView.render().$el);

