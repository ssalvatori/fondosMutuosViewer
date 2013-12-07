#!/bin/bash

echo "Clean folders"
rm -rf ../script/vendor/*
rm -rf ../css/themes/smoothness

echo "Install dependencies using bower"
bower install

echo "Copying JS files"
cp -rf ../scripts/vendor/requirejs/require.js ../scripts/vendor/require.js
cp -rf ../scripts/vendor/requirejs-text/text.js ../scripts/vendor/text.js
cp -rf ../scripts/vendor/underscore-amd/underscore.js ../scripts/vendor/underscore.js
cp -rf ../scripts/vendor/jquery/jquery.js ../scripts/vendor/jquery.js
cp -rf ../scripts/vendor/jquery-ui/ui/jquery-ui.js ../scripts/vendor/jquery-ui.js
cp -rf ../scripts/vendor/jquery-ui/ui/jquery.ui.autocomplete.js ../scripts/vendor/jquery.ui.autocomplete.js
cp -rf ../scripts/vendor/backbone-amd/backbone.js ../scripts/vendor/backbone.js
cp -rf ../scripts/vendor/layoutmanager/backbone.layoutmanager.js ../scripts/vendor/backbone.layoutmanager.js

echo "Copying CSS files"
cp -rf ../scripts/vendor/bootstrap/docs/assets/css/bootstrap.css ../css/bootstrap.css
cp -rf ../scripts/vendor/bootstrap/docs/assets/css/bootstrap-responsive.css ../css/bootstrap-responsive.css
#cp -rf ../scripts/vendor/jquery-ui/themes/smoothness  ../css/themes

echo "Copying MAP files"
#cp -rf ../scripts/vendor/underscore-amd/underscore-min.map ../scripts/vendor/underscore-min.map
#cp -rf ../scripts/vendor/jquery/jquery.min.map ../scripts/vendor/jquery.min.map
#cp -rf ../scripts/vendor/backbone-amd/backbone-min.map ../scripts/vendor/backbone-min.map

echo "Copying IMG files"
cp -rf ../scripts/vendor/bootstrap/img/* ../img/

echo "Moving bootstrap files"
#cp -rf ../scripts/vendor/bootstrap/js/bootstrap.js ../scripts/vendor/bootstrap.js
cp -rf ../scripts/vendor/bootstrap/docs/assets/js/bootstrap.js ../scripts/vendor/bootstrap.js

echo "Removing files"
rm -rf ../scripts/vendor/requirejs
rm -rf ../scripts/vendor/requirejs-text
rm -rf ../scripts/vendor/jquery
rm -rf ../scripts/vendor/jquery-ui
rm -rf ../scripts/vendor/bootstrap
rm -rf ../scripts/vendor/underscore-amd
rm -rf ../scripts/vendor/backbone-amd
rm -rf ../scripts/vendor/layoutmanager