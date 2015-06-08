require.config({
	paths: {
		'jquery': '../training-movies/js/vendor/jquery/dist/jquery',
    	'underscore': '../training-movies/js/vendor/underscore/underscore-min',
    	'backbone': '../training-movies/js/vendor/backbone/backbone-min',
		'mocha'      : '../node_modules/mocha/mocha',
		'chai'       : '../node_modules/chai/chai',
		'movieModel' : '../training-movies/js/models/movie'
	},
	shim: {
		'underscore': {
				exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'mocha': {
				 exports: 'mocha'
		},
		'chai': {
				 exports: 'chai'
		}
	}
});
 
define(function(require) {
	var chai = require('chai');
	var mocha = require('mocha');
	require('jquery');

	// Chai Assertions
	var should = chai.should();
	expect = chai.expect();

	mocha.setup('bdd');
	mocha.reporter('html');

	require([
		'movieModelTests.js',
	], function(require) {

		if (window.mochaPhantomJS) {
			mochaPhantomJS.run();
		} else {
			mocha.run();
		}

	});
 
});