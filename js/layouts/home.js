define([
    'jquery',
    'underscore',
    'backbone',
    'layoutmanager',
    'views/search'
], function ($, _, Backbone, Layout, SearchView) {

    'use strict';
    
    Backbone.Layout.configure( {
        manage: true
    });
    
    var HomeLayout = Backbone.Layout({
        template: "#main",
        
        views: {
            "#search": new SearchView()
        }
        
    });
    
    return HomeLayout;
});