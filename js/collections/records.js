define([
    'jquery',
    'underscore',
    'backbone',
    'models/record'
], function ($, _, Backbone, RecordModel) {
    'use strict';
    
    var RecordsCollection = Backbone.Collection.extend({
        
        model:  RecordModel,
        url: 'http://fondosapi.salvatori.cl/fondosMutuos/record/find',
                
        parse: function (response) {
            if (response.status === "ok") {
                return response.data;
            } else {
                return;
            }
        }
    });
    
    return RecordsCollection;
    
});