const gulp = require('gulp');
const gulpBrowser = require("@pushrocks/gulp-browser");
// var reactify = require('reactify');
const babelify  = require('babelify');
const del = require('del');
const size = require('gulp-size');

function transform () {
    return gulp.src('./project/static/scripts/jsx/*.js')
        .pipe(gulpBrowser.browserify({ transform: ['babelify'] }))
        .pipe(gulp.dest('./project/static/scripts/js/'))
        .pipe(size());
};

function clear(){
    return del(['./project/static/scripts/js']);
};

function watchFileUpdate(){
    return  gulp.watch('./project/static/scripts/jsx/*.js').on('change', gulp.series(transform));
}
gulp.task('default',gulp.series( clear ,transform, watchFileUpdate));