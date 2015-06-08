define(['views/movies', 
		'collections/movies',
		'views/detailsView'
], 

	function(MoviesView, movies, DetailsView) {
	
	var Router = Backbone.Router.extend({
		initialize : function() {
			
		},

        routes: {
			"": "default",
			"details/:id" : "detailsView",
		},

		default: function() {
			movies.bind("reset", function(){
				var moviesView = new MoviesView({collection: movies});
				$("#allMovies").append(moviesView.render().$el);
			});
		},

		detailsView: function(id) {
			
			if(movies.length == 0) {
				movies.bind("reset", function(){
				
					this.detailsView = new DetailsView({collection:movies});
					console.log(this.detailsView);
					this.detailsView.render(id).$el;
				});	
			}
			else {
					this.detailsView = new DetailsView({collection:movies});
					console.log(this.detailsView);
					this.detailsView.render(id).$el;
			}
			console.log(id);
		}
	});


	var router = new Router;

	Backbone.history.start();
});
