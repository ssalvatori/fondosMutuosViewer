define([
    'jquery',
    'underscore',
    'backbone',
    'models/name'
], function ($, _, Backbone, NamesModel) {
    'use strict';
    
    var NamesCollection = Backbone.Collection.extend({
        
        model:  NamesModel,
        //url: 'http://fondosapi.salvatori.cl/fondosMutuos/record/names',
        url: 'js/tests/names.json',
                  
        parse: function (response) {
            if (response.status === "ok") {
                var result = [];
                response.names.forEach(function (name) {
                    result.push({name: name});
                });
                return result;
            } else {
                return;
            }
        }
        
    });
    
    return NamesCollection;
    
});