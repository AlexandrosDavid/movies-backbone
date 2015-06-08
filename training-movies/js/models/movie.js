define([
  'jquery',
  'underscore',
  'backbone',
  
], function($, _, Backbone){


return Backbone.Model.extend({
	initialize : function() {
		//console.log(this);
	},

	getDetails: function() {
		console.log("ds");
		var id = this.id;
		this.url = 'http://api.rottentomatoes.com/api/public/v1.0/movies/'+id+'.json?apikey=xc5v59emq57yean7v2n4wb9p'; 
		this.fetch({
			url: this.url,
		    dataType: "jsonp",
            type: 'POST',
			async: true,
            success: function (model, response, options) {
				console.log(response.studio);
			},
            error: function (model, response, options) {
                console.log('not ok!');
            }
		});
	}
});


});


