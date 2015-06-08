define([
  'jquery',
  'underscore',
  'backbone',
  'collections/movies'
  
], function($, _, Backbone, Movies){

return Backbone.View.extend({

	el:"#movieDetail",
	//tagName: 'li',
	
	initialize : function(options) {
		
	},

	template: _.template( $(".moreInfoView").html()),
	
	
	render: function() {

		console.log(this.model.toJSON());
		this.$el.append(this.template(this.model.toJSON()));
		
		return this;
	},
	
	
	
	
	
});

});