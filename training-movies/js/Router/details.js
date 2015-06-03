define([
  'jquery',
  'underscore',
  'backbone',
  'views/detailsView',
  'collections/movies',
  'views/movies',
  
], function($, _, Backbone, DetailsView, Movies, MoviesView) {

var DetailsRouter = Backbone.Router.extend({
		initialize : function() {
			this.detailsView = new DetailsView({collection:Movies.Collection});
		},

        routes: {
			"details/:id" : "detailsView",
			"": "default"
		},
		
});

var detailRouter = new DetailsRouter;




detailRouter.on('route:detailsView', function (id) {
	this.detailsView.render(id);
});


Backbone.history.start();
  
  
 });
  
  
  
     
	
	 
	
	
	
	
		