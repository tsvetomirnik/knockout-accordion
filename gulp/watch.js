'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['scripts']);
    gulp.watch('src/**/*.html', ['scripts']);
});