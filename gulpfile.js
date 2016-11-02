var gulp = require('gulp'),
  browserify = require('browserify'),
  stringify = require('stringify'),
  source = require('vinyl-source-stream');


function bundleComponent(sourcePath, destPath) {
  var bundleMethod = browserify;//global.isWatching ? watchify : browserify;

  var bundler = bundleMethod({
    // Specify the entry point of your app
    entries: [sourcePath]
  });

  var bundle = function () {
    return bundler
      .transform(stringify(['.html']))
      // Enable source maps!
      .bundle({ debug: true })
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source(destPath))
      // Specify the output destination
      .pipe(gulp.dest('./build/'));
  };

  return bundle();
};

gulp.task('browserify', function () {
  bundleComponent('./src/components/accordion/accordion.component.js', 'accordion.js');
  bundleComponent('./src/components/accordion-item/accordion-item.component.js', 'accordion-item.js');
});

gulp.task('default', ['browserify']);