'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'browserify', 'tsify', 'vinyl-source-stream', 'vinyl-buffer', 'stringify']
});

gulp.task('scripts', function () {
    var entries = path.join(conf.paths.entry);
    var dest = path.join(conf.paths.dest);
    var destFilename = conf.paths.destFilename;

    var bundler = $.browserify({
        "entries": entries,
        "debug": true
    });

    bundler.plugin($.tsify, {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
    });

    return bundler
        .transform($.stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            removeComments: false,
            minify: false
        })
        .bundle()
        .pipe($.vinylSourceStream(destFilename))
        .pipe($.vinylBuffer())
        .pipe(gulp.dest(dest))
        .pipe($.rename(destFilename))
        .pipe($.sourcemaps.init({ loadMaps: true }))
        // capture sourcemaps from transforms
        .pipe($.uglify())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(dest));

});