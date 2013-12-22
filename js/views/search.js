define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
], function ($, _, Backbone, Moment) {

    'use strict';
    
    var SearchView = Backbone.View.extend({
        template: 'search',
                
        events: {
            "click .getData": "serchValues"
        },
                                
        serialize: function () {
            console.log("serialize");
            return { names: this.collection.toJSON() };
        },
        
        render: function(layout) {
            console.log("render view");
            return layout(this).render();   
        }
        
    });
    
    return SearchView;
});