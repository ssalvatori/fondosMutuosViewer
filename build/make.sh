#!/bin/bash

echo "Clean folders"
sh clean.sh


echo "Install dependencies using bower"
bower install

echo "Copying JS files"
cp -rf ../scripts/vendor/requirejs/require.js ../js/externals/require.js
cp -rf ../scripts/vendor/requirejs-text/text.js ../js/externals/text.js
cp -rf ../scripts/vendor/underscore-amd/underscore.js ../js/externals/underscore.js
cp -rf ../scripts/vendor/jquery/jquery.js ../js/externals/jquery.js
cp -rf ../scripts/vendor/jquery-ui/ui/jquery-ui.js ../js/externals/jquery-ui.js
cp -rf ../scripts/vendor/jquery-ui/ui/jquery.ui.autocomplete.js ../js/externals/jquery.ui.autocomplete.js
cp -rf ../scripts/vendor/backbone-amd/backbone.js ../js/externals/backbone.js
cp -rf ../scripts/vendor/layoutmanager/backbone.layoutmanager.js ../js/externals/backbone.layoutmanager.js
cp -rf ../scripts/vendor/jquery-mobile-bower/js/jquery.mobile-1.3.2.js ../js/externals/jquery.mobile.js

echo "Copying CSS files"
#cp -rf ../scripts/vendor/bootstrap/docs/assets/css/bootstrap.css ../css/bootstrap.css
#cp -rf ../scripts/vendor/bootstrap/docs/assets/css/bootstrap-responsive.css ../css/bootstrap-responsive.css
#cp -rf ../scripts/vendor/jquery-ui/themes/smoothness  ../css/themes

echo "Copying MAP files"
cp -rf ../scripts/vendor/underscore-amd/underscore-min.map ../js/externals/underscore-min.map
cp -rf ../scripts/vendor/jquery/jquery.min.map ../js/externals/jquery.min.map
cp -rf ../scripts/vendor/backbone-amd/backbone-min.map ../js/externals/backbone-min.map

echo "Copying IMG files"
cp -rf ../scripts/vendor/bootstrap/img/* ../images/externals/

echo "Moving bootstrap files"
#cp -rf ../scripts/vendor/bootstrap/js/bootstrap.js ../scripts/vendor/bootstrap.js
cp -rf ../scripts/vendor/bootstrap/docs/assets/js/bootstrap.js ../js/externals/bootstrap.js

echo "Removing files"
#rm -rf ../scripts/
#rm -rf ../scripts/vendor/requirejs
#rm -rf ../scripts/vendor/requirejs-text
#rm -rf ../scripts/vendor/jquery
#rm -rf ../scripts/vendor/jquery-ui
#rm -rf ../scripts/vendor/bootstrap
#rm -rf ../scripts/vendor/underscore-amd
#rm -rf ../scripts/vendor/backbone-amd
#rm -rf ../scripts/vendor/layoutmanager