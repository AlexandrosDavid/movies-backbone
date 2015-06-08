define([
  'jquery',
  'underscore',
  'backbone',
  'collections/movies',
  'views/moreInfo',
  
], function($, _, Backbone, Movies, MoreInfo){

return Backbone.View.extend({

	el:"#movieDetail",
	//tagName: 'li',
	
	initialize : function(options) {
		
	},

	template: _.template( $(".detailsTemplate").html()),
	
	events: {
		'click #initPage' : 'initPage',
		'click #addInfo'  : 'addInfo'
	},
	
	render: function(id) {


		this.model = this.collection.get(id);
		
		this.$el.append(this.template(this.model.toJSON()));
		console.log(this.model);
		
		this.$el.show();
		this.$el.parents("body").find("#allMovies").hide();

		//this.moreInfo();

		var moreInfo = new MoreInfo({model:this.model});
		moreInfo.render().$el;
		
		return this;
	},
	
	
	moreInfo	: function() {
	
		var _this = this;

		_this.model.on('change', function() {
			_this.$el.find(".moreInfo").html(_this.model.get('studio'));
		})
		_this.model.getDetails();
	
	},
	
	
});

});