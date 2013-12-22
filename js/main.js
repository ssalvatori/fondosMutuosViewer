require.config({
    baseUrl: 'js/',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        underscore: 'externals/underscore',
        backbone:   'externals/backbone',
        jquery:     'externals/jquery',
        handlebars:       'externals/handlebars',
        moment:     'externals/moment',
	    layoutmanager:	'externals/backbone.layoutmanager'
    },
    shim: {
    }
});

define([
    'jquery', 
    'underscore', 
    'backbone', 
    'handlebars',
    'layoutmanager',
    'collections/names',
    'views/search'
], function ($, _, Backbone, Layoutmanager, Handlebars , NamesCollection, SearchView) {
    'use strict';
    
    Backbone.Layout.configure({
        manage: true,
        
        paths: {
            layout: "js/templates/layouts/",
            template: "js/templates/"
        },
        
        fetch: function (path) {
            var done = this.async();
            console.log("fecthing template");
            $.get(path + ".html", function (contents) {
                done(contents);
            });
        },
                  
        render: function (template, context) {
            return Handlebars.compile(template)(context);            
        }
    });
        
   var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function () {
            console.log("Index router");
            
            var main = new Backbone.Layout({
                name: "home",        
            });
            
            var names = new NamesCollection();
            
            names.fetch().success(function () {
                
                console.log(names);                
                /* setup views with collection data */
                //var listNames = main.views['.list'] = new SearchView({ collection: names });
                        
                main.render(function (contents) {
                    console.log("render main layout");
                    $("#wrap").html(contents);
                });

            });
                            
        }
    });
    
    var App = new Router();
    Backbone.history.start();


});
