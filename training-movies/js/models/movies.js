define([
  'jquery',
  'underscore',
  'backbone',
  
], function($, _, Backbone){


return Backbone.Model.extend({
	initialize : function() {
		this.getMovies();
	},

	getMovies: function() {
		
		this.fetch({
			url:'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?apikey=xc5v59emq57yean7v2n4wb9p&limit=10',
		    dataType: "jsonp",
            type: 'POST',
			async: true,
            
            success: function (model, response, options) {
				
			},
            error: function (model, response, options) {
                console.log('not ok!');
            }
		});
	}
});



});
