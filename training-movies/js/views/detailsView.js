define([
  'jquery',
  'underscore',
  'backbone',
  'collections/movies'
  
], function($, _, Backbone, Movies){

return Backbone.View.extend({

	el:"#movieDetail",
	
	initialize : function(options) {
		
	},
	
	events: {
		'click #initPage' : 'initPage',
		'click #addInfo'  : 'addInfo'
	},
	
	render: function(id) {
	
		var model = Movies.collection.where({id:id});
		
		var title = model[0].get("title");
		var year = model[0].get("year");
		var synopsis = model[0].get("synopsis");
		
		this.$el.show();
		this.$el.find(".moreInfo").hide();
		this.$el.parents("body").find("#allMovies").hide();
		this.$el.find(".details").empty().append("<br/><ul><li> title: "+title+ "</li> <li> year: "+year+ " </li><li> synopsis: "+ synopsis+"</li></ul>");
		
		this.ajaxReq(model[0]);
		
		return this;
	},
	
	
	ajaxReq	: function(model) {
	
		var title = model.get("title");
		
		var _this = this;
	
		model.fetch({
			url: "http://www.imdbapi.com/?t="+title,
		    dataType: "json",
            type: 'POST',
			async: true,
			

            success: function (model, response, options) {
				console.log(response.Actors);
				_this.$el.find(".moreInfo").empty().append(response.Actors);
			},
            error: function (model, response, options) {
                console.log('not ok!');
            }
        
			
		});
        
		
	},
	
	addInfo : function() {
	
		var _this = this;
		_this.$el.find(".moreInfo").show();
	}
	
});

});