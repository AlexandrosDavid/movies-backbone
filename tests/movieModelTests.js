define(function(require) {

	var Movie = require('movieModel');

	describe('Movie Model', function(){

		before(function() {
			// If I put var it breaks!!!
			movie = new Movie({
				"id": "771028170",
				"title": "Mad Max: Fury Road",
				"year": 2015,
				"mpaa_rating": "R",
				"runtime": 120,
				"url": "ssddsdsf",
			});

		});

		it('should id not empty and has specific id"', function() {
			movie.id.should.not.be.empty;
			movie.id.should.equal('771028170');
		});

		it('should have a title of "Mad Max: Fury Road"', function() {
			movie.get("title").should.not.be.empty;
			movie.get("title").should.equal('Mad Max: Fury Road');
		});

	});

});