var DetailsRouter = Backbone.Router.extend({
		initialize : function() {
			console.log("init Routes");
			this.detailsView = new DetailsView({collection:movies});
		},

        routes: {
			//"posts/:id": "getPost",
            //"*actions": "detailsView",
			"details/:id" : "detailsView",
			"": "default"
			
        },
		
});

var detailRouter = new DetailsRouter;



detailRouter.on('route:detailsView', function (id) {
		this.detailsView.render(id);
});

detailRouter.on('route:default', function (id) {
	//alert("haha");
	$("#allMovies").append(moviesView.render().$el);
});




Backbone.history.start();
  
  
 
  
  
  
     
	
	 
	
	
	
	
		