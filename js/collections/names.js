define([
    'jquery',
    'underscore',
    'backbone',
    'models/name'
], function ($, _, Backbone, NamesModel) {
    'use strict';
    
    var NamesCollection = Backbone.Collection.extend({
        
        model:  NamesModel,
        url: 'http://fondosapi.salvatori.cl/fondosMutuos/record/names',
          
        /*
        parse: function (response) {
            if (response.status === "ok") {
                console.log(response);
                return response.names;
            } else {
                return;
            }
        }
        */
    });
    
    return NamesCollection;
    
});