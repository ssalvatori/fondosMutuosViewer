define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {

    'use strict';
    
    var HomeView = Backbone.View.extend({
        el: '#wrap',
        
        initialize: function () {
            console.log("Loading homeView");
        },
                
        render : function () {

        }

    });

    return HomeView;
});