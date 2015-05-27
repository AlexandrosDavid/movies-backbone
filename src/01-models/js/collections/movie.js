var Movies = Backbone.Collection.extend ({
	
	initialize: function() {
		console.log("collection init");
	}
	
});


var movies = new Movies();

movies.reset([movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10]);

//console.log(collectionMovie);

$("#content").html(JSON.stringify(movies));




$("#addModel").click(function() {

	var randomNumber = Math.floor((Math.random() * 1000) % 199);
	
	var randomYear = Math.floor((Math.random() * 1000) % 100) + 1915;
	
	console.log(arrayMoviesTitle[randomNumber]);
	
	movies.add([new movie({ title: arrayMoviesTitle[randomNumber] , year: randomYear, genre: genreArray[randomNumber], image : "http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX214_AL_.jpg", director: directorArray[randomNumber]})]);
	
	console.log(movies);
	
	$("#content").html(JSON.stringify(movies));
});






var title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lobortis viverra. Fusce pretium pulvinar iaculis. Praesent imperdiet risus est, a efficitur elit vehicula quis. Phasellus vestibulum ex eu fermentum viverra. Phasellus lacus nisi, mattis id arcu et, mollis rutrum tellus. Mauris vitae ex in purus fringilla vulputate. Aliquam sollicitudin odio vitae est fringilla semper nec ut massa. Ut a consequat ipsum. Sed nisi tellus, dapibus sit amet dapibus commodo, iaculis sit amet est. Ut ac convallis massa. Cras lacus risus, tristique vel venenatis ac, rutrum non lorem. In eget quam nibh. Nulla tincidunt posuere interdum. Pellentesque vel ante neque. Etiam varius augue non magna facilisis luctus. Praesent pulvinar dictum diam, vel mollis ante interdum non. Phasellus aliquet eros at turpis condimentum laoreet. Donec vel fermentum eros. Curabitur tellus dui, semper a molestie a, tempus sit amet leo. Proin vitae ligula quis nunc varius sollicitudin vel ut enim. In mollis magna nec fermentum ultricies. Donec vitae magna ullamcorper lectus congue porta et pretium enim. Vestibulum vestibulum vehicula molestie. Praesent tempus tempus egestas. Aliquam mattis imperdiet dui, vitae congue turpis. Nunc in nibh a nunc feugiat pretium. Vestibulum id finibus sapien, nec aliquet felis. Nunc posuere lorem eu ante egestas, eu. ";

var arrayMoviesTitle = title.split(' ');;


var genre = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, neque et porttitor porttitor, libero sapien eleifend nisi, sit amet varius arcu libero pellentesque sapien. Ut auctor massa libero, et laoreet odio imperdiet ac. Duis eget blandit lorem. Aliquam erat volutpat. Etiam interdum odio vitae massa feugiat tempor in ac est. Vivamus et accumsan nulla, eu ornare ante. Praesent a fringilla diam. Curabitur commodo augue at urna congue, nec feugiat lectus semper. Fusce molestie, arcu non porta dictum, nisi orci eleifend risus, quis suscipit massa ipsum eu tortor. Suspendisse eleifend erat eu justo laoreet, ac volutpat ligula commodo. Proin lobortis arcu ex, maximus lobortis elit accumsan ac. Cras imperdiet pulvinar quam non feugiat. Proin lacinia libero a sem porta pellentesque eu ut purus. Donec nec turpis vel quam commodo porttitor. Suspendisse eu pharetra felis, vel venenatis mauris. Nunc fringilla lectus consectetur, ullamcorper dui a, dignissim orci. Vivamus quis hendrerit nibh. Sed in ultrices tortor. Maecenas id odio augue. Duis non suscipit leo, eu molestie velit. Vestibulum mattis, urna eu mollis lobortis, dolor diam convallis leo, quis imperdiet diam massa vel ipsum. Sed risus magna, ultricies sed lacus nec, imperdiet aliquam tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada. ";

var genreArray = genre.split(' ');


var director = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet pulvinar aliquet. Sed nec dapibus ligula. Curabitur laoreet maximus ipsum, auctor ullamcorper sapien ornare non. Fusce mattis ex vel purus blandit egestas. Nulla suscipit lobortis nisl. Morbi sagittis ex nec malesuada tincidunt. Vivamus lectus nibh, imperdiet at nulla sed, faucibus finibus est. Fusce condimentum ligula nec sodales bibendum. Nulla eleifend scelerisque ultrices. Sed ullamcorper eget lacus eu ullamcorper. Maecenas sapien risus, tristique a vehicula sit amet, sollicitudin non lorem. Vivamus lobortis lacinia ultrices. Phasellus vitae arcu eu augue varius dictum eget feugiat nisl. Phasellus a magna vulputate, vehicula enim sit amet, vehicula ipsum. Sed fermentum aliquam sapien vitae vulputate. Curabitur elementum justo vitae sem eleifend, vitae scelerisque sapien porta. Pellentesque ornare dui at elementum blandit. Nullam tempus scelerisque orci non commodo. Etiam scelerisque odio neque, at mattis odio sodales nec. Duis ut nisl vel velit auctor hendrerit at nec arcu. Fusce euismod aliquam arcu, ac luctus felis congue eu. Pellentesque rutrum tortor id lectus ultrices consectetur. Morbi et velit porta, tempor urna eu, rhoncus arcu. Nunc commodo odio velit, a molestie nibh semper vel. Aliquam gravida purus eu ipsum ullamcorper ultrices. Suspendisse quis dui et metus feugiat scelerisque. Aliquam mi. ";

var directorArray = director.split(' ');