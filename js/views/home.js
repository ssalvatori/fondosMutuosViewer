define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
    'chart',
    'collections/records',
    'collections/names',
    'text!tpl/records_list.html',
    'text!tpl/names_list.html',
    'text!tpl/error.html'
], function ($, _, Backbone, Moment, Chart, RecordsCollection, NamesCollection, TplRecordList, TplNameList, TplError) {

    'use strict';
    
    var HomeView = Backbone.View.extend({
        el: "#wrap",
        
        events: {
            "click .getData": "fetchData"
        },
        
        fetchData : function (Chart) {            
            var that = this;
            
            var selectedName = $("#listNames").val();
            
            console.log("getting data from server");
            
            this.collection = new RecordsCollection();
            this.collection.fetch({
                processData: true,
                
                data: {
                    name: selectedName
                },

                success: function (records) {
                    that.$el.children("#content").html(_.template(TplRecordList, {records: records.models, _: _, name: selectedName}));
                    
                    var result = [];
                    var labels = [];
                    records.models.forEach(function (name) {
                        var obj = name.toJSON();
                        result.push(obj.price);
                        labels.push(moment(obj.priceDate).format('l'));
                    });
                                        
                    var data = { 
                        labels: labels, 
                        datasets: [ {
                             fillColor : "rgba(220,220,220,0.5)",
                             strokeColor : "rgba(220,220,220,1)",
			                 pointColor : "rgba(220,220,220,1)",
                             pointStrokeColor : "#fff",
                             data: result
                        }]
                    };
                    var ctx = document.getElementById("myChart").getContext("2d");

                    var graph = new window.Chart(ctx).Line(data);
                                        
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
            
            this.collection = new NamesCollection();
            this.collection.fetch({
                success: _.bind(function (names) {
                    $("#listNames").html(_.template(TplNameList, {names: names.models, _: _}));
                    this.$el.children("#listNames").html(_.template(TplNameList, {names: names.models, _: _}));
                },this),
                error: _.bind(function (error) {
                    console.log(error);
                    this.$el.children("#content").html(_.template(TplError, {message: "Error getting data"}));
                    alert("Error getting data");
                },this)
            });
        },
                
        render : function () {

        }

    });
    
    return HomeView;    
});