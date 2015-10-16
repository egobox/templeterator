var gulp = require('gulp'),
    jade = require('gulp-jade'),
    postcss = require('gulp-postcss'),
    scss = require('postcss-scss'),
    cssnext = require('cssnext'),
    autoprefixer = require('autoprefixer'),
    //uncss = require('gulp-uncss'), //only for those who understand how it works!
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('templates', function() {
    gulp.src('./jade/pages/*.jade')
        .pipe(jade({
            client: true
        }))
        .pipe(gulp.dest('../public/'))
});

gulp.task('default', function() {

});