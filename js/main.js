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

define(['jquery', 'underscore', 'backbone', 'layoutmanager', 'layouts/home'], function ($, _, Backbone, Layoutmanager, HomeLayout) {
    'use strict';
    
    var Router = Backbone.Router.extend({
        routes: {
            "": "index"  
        },
        
        index: function () {
            
            var HomeLayout = new HomeLayout();
            
        }
    });

    
});
