/* jshint node: true */
'use strict';

var gulp = require('gulp');
var path = require('path');
var wrench = require('wrench');
var plugins = {
    sequence: require('gulp-sequence')
};

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.js$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

/**
 *  Default task
 */
gulp.task('default', function () {
    gulp.start('build');
});
