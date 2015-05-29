var DetailsView =  Backbone.View.extend({

	el:"#movieDetail",

	initialize : function() {
		console.log("init movies view2");
	},
	
	events: {
		'click #initPage' : 'initPage'
	},
	
	render: function(id) {
	
		$(".details").html('');
		
		console.log(this.$el);
		
		var model = this.collection.where({id:id});
		
		var title = model[0].get("title");
		
		console.log(title);
		
		this.$el.show();
		
		this.$el.parents("body").find("#allMovies").hide();
		
		this.$el.append(title);
		
		return this;
	},
	
	initPage : function() {
		detailRouter.navigate('', { trigger: true });
	}
	
});

