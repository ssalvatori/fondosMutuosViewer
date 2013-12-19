require.config({
    baseUrl: 'js/',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        underscore: 'externals/underscore',
        backbone:   'externals/backbone',
        jquery:     'externals/jquery',
        text:       'externals/text',
        moment:     'externals/moment',
	layoutmanager:	'externals/backbone.layoutmanager'
    },
    shim: {
    }
});

define(['jquery', 'underscore', 'backbone', 'layoutmanager', 'layout/home'], function ($, _, Backbone, Layoutmanager, HomeLayout) {
    'use strict';

    var homeView = new HomeView();

	var AppRouter = Backbone.Router.extend ({
		routes: {
			'': 'home',
		}
		home: function() {
			console.log("home");

			return new HomeLayout();

		},
	});

    
});
