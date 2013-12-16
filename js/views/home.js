define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
    'collections/records',
    'collections/names',
    'text!tpl/records_list.html',
    'text!tpl/names_list.html',
    'text!tpl/error.html'
], function ($, _, Backbone, Moment, RecordsCollection, NamesCollection, TplRecordList, TplNameList, TplError) {

    'use strict';
    
    var HomeView = Backbone.View.extend({
        el: "#wrap",
        
        events: {
            "click .getData": "fetchData"
        },
        
        fetchData : function () {
            var that = this;
            console.log("getting data from server");
            this.collection = new RecordsCollection();
            this.collection.fetch({
                success: function (records) {
                    that.$el.children("#content").html(_.template(TplRecordList, {records: records.models, _: _}));
                },
                error: function (error) {
                    console.log(error);
                    that.$el.children("#content").html(_.template(TplError, {message: "Error getting data"}));
                    alert("Error getting data");
                }
            });
        },
        
        initialize: function () {
            console.log("Loading homeView");
            var that = this;
            
            this.collection = new NamesCollection();
            this.collection.fetch({
                success: function (names) {
                    that.$el.children("#listNames").html(_.template(TplNameList, {names: names.models, _: _}));
                },
                error: function (error) {
                    console.log(error);
                    that.$el.children("#content").html(_.template(TplError, {message: "Error getting data"}));
                    alert("Error getting data");
                }
            });
        },
                
        render : function () {

        }

    });
    
    return HomeView;    
});