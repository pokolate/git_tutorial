require('es6-promise').polyfill();
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var postcss       = require('gulp-postcss');
var cssImport     = require('postcss-import');

gulp.task('sass', () => {
  const plugins = [
    cssImport({
      path: [ 'node_modules' ]
    })
  ];
  return gulp.src('./assets/css/sass/**/*.scss')
  .pipe(sass())
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./assets/css/'))
});

gulp.task('watch', function() {
  gulp.watch('./assets/css/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);
