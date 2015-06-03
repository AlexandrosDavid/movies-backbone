require.config({
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore-min',
    backbone: 'vendor/backbone/backbone-min'
  }

});

requirejs(['models/movie']);
requirejs(['collections/movies']);
requirejs(['views/detailsView']);


requirejs(['views/movie']);
requirejs(['views/movies']);

requirejs(['Router/details']);


