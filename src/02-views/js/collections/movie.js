var collectionMovies = Backbone.Collection.extend ({
	
	initialize: function() {
		console.log("collection init");
	}
	
});

var collectionMovie = new collectionMovies();

collectionMovie.reset([movie1, movie2, movie3, movie4, movie5]);

console.log(collectionMovie);

$("#content").html(JSON.stringify(collectionMovie));




/*$("#addModel").click(function() {

	var randomNumber = Math.floor((Math.random() * 10) % 5);
	
	console.log(randomNumber);
	
	//console.log(arrayMovies[randomNumber]);
	

	collectionMovie.add(arrayMovies[randomNumber]);
	
	console.log(collectionMovie);
	
	$("#content").html(JSON.stringify(collectionMovie));
});*/



var arrayMovies = []

arrayMovies[0] = movie6;
arrayMovies[1] = movie7;
arrayMovies[2] = movie8;
arrayMovies[3] = movie9;
arrayMovies[4] = movie10;

