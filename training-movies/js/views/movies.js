define([
  'jquery',
  'underscore',
  'backbone',
  'views/movie',
  'collections/movies'
  
], function($, _, Backbone, MovieView, Movies){


return Backbone.View.extend({

	tagName : "ul",
	initialize : function(options) {
		//console.log("init movies view");
	},
	
	render: function(param) {
	
		var _this = this;
		//alert("sdsd");
		console.log(_this.$el);
		
		_this.$el.empty();
		
		$("#allMovies").show();
		$("#movieDetail").hide();
		
		_this.$el.parents("body").find("#movieDetail").hide();
	
		_this.collection.each(function(model) {
		
			var movieView = new MovieView({model:model});
			_this.$el.append(movieView.render().$el);
	
		});
		
		
		return this;
	},
	
});


	
});