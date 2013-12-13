define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
    'collections/records',
    'text!tpl/records_list.html'
], function ($, _, Backbone, Moment, RecordsCollection, TplRecordList) {

    'use strict';
    
    var HomeView = Backbone.View.extend({
        el: $("#wrap"),
        
        initialize: function () {
            var that = this;
            console.log("Loading homeView");
            
            this.collection = new RecordsCollection();
            this.collection.fetch({
                success: function (records) {
                    that.$el.html(_.template(TplRecordList, {records: records.models, _: _}));
                },
                error: function (error) {
                    console.log(error);
                    alert("Error getting data");
                }
            });

        },
                
        render : function () {

        }

    });

    return HomeView;
});