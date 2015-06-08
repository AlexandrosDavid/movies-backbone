define([
  'jquery',
  'underscore',
  'backbone',
  'models/movie',
  'models/movies'
  
], function($, _, Backbone, Movie, MoviesModel){


var Movies = Backbone.Collection.extend({

	model : Movie,
	initialize : function() {
	},
	
	
});



var moviesData = new MoviesModel();
var movies = new Movies();


moviesData.on('change', function() {
	movies.reset(moviesData.attributes.movies);
	console.log(movies);
});



return movies;




});





