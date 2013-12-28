require.config({
    baseUrl: 'js/',
    urlArgs: 'bust=' + (new Date()).getTime(),
    paths: {
        underscore: 'externals/underscore',
        backbone:   'externals/backbone',
        jquery:     'externals/jquery',
        text:       'externals/text',
        moment:     'externals/moment',
        chart:     'externals/Chart'
    },
    shim: {
    }
});

define(['jquery', 'underscore', 'backbone', 'views/home'], function ($, _, Backbone, HomeView) {
    'use strict';

    var homeView = new HomeView();

    
});