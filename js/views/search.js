define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
    'collections/names',
], function ($, _, Backbone, Moment, NamesCollection, TplNameList) {

    'use strict';
    
    var SearchView = Backbone.View.extend({
        el: "#wrap",
                        
        initialize: function () {
            console.log("Loading searchView");
            
            this.collection = new NamesCollection();
            this.collection.fetch({
                success: _.bind(function (names) {
                    $("#listNames").html(_.template(TplNameList, {names: names.models, _: _}));
                    this.$el.children("#listNames").html(_.template(TplNameList, {names: names.models, _: _}));
                }, this),
                error: _.bind(function (error) {
                    console.log(error);
                    this.$el.children("#content").html(_.template(TplError, {message: "Error getting data"}));
                    alert("Error getting data");
                }, this)
            });
        },
        
        serialize: function () {
            return this.render   
        },
                
        render : function () {

        }

    });
    
    return SearchView;
});