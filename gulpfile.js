// gulp
var gulp = require('gulp');

// plugins
var del = require('del');

var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var cssGlobbing = require('gulp-css-globbing');
var sass = require('gulp-ruby-sass');
var react = require('gulp-react');
var concat = require('gulp-concat');
var eol = require('gulp-eol');

gulp.task('webserver', function () {

  return gulp.src('build')
    .pipe(webserver({
      fallback : 'index.html',
      livereload : true
    }));
});

gulp.task('livereload', function () {

  return gulp.src(['build/assets/css/*.css', 'build/assets/js/*.js'])
    .pipe(watch(['*.css', '*.js']));
});

gulp.task('clean', function () {

  del(['build']);
});

gulp.task('html', function () {

  return gulp.src('client/index.html')
    .pipe(eol())
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {

  return gulp.src('client/app.sass')
    .pipe(cssGlobbing({extensions: ['.sass', '.scss', '.css']}))
    .pipe(sass())
    .pipe(eol())
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('js', function () {

  return gulp.src(['client/**/*.js', 'client/**/*.jsx'])
    .pipe(react())
    .pipe(eol())
    .pipe(gulp.dest('build/assets/js'));
});

gulp.task('build', ['html', 'css', 'js']);

gulp.task('watch', ['build'], function () {

  gulp.watch('client/index.html', ['html']);
  gulp.watch('client/**/*.sass', ['css']);
  gulp.watch(['client/**/*.js', 'client/**/*.jsx'], ['js']);
});

gulp.task('default', ['watch', 'webserver', 'livereload']);
