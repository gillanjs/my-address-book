var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var connect = require('gulp-connect');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var pump = require('pump');

gulp.task('js', function() {
  return gulp.src('scripts/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('assets'))
  .pipe(connect.reload())
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('scripts/*.js'),
        uglify(),
        gulp.dest('assets')
    ],
    cb
  );
});

gulp.task('css', function() {
  gulp.src('styles/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('assets'))
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'js', 'connect', 'watch']);

gulp.task('watch', function() {
  gulp.watch('scripts/*.js', ['js']);
  gulp.watch('styles/*.css', ['css']);
  gulp.watch('**/*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
	port: 8081,
    root: '.',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src('**/*.html')
  .pipe(connect.reload())
});