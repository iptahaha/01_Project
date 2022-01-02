const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('clean', function(cb) {
    del(['dist/*']);
    cb();
})

gulp.task('sass', function(cb) {
    gulp.src('./web/src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
})

gulp.task('copy:html', function (cb){
    gulp.src('./web/src/**/*.html')
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('copy:js', function (cb){
    gulp.src('./web/src/**/*.js')
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('copy:img', function (cb){
    gulp.src('./web/src/**/*.png')
        .pipe(gulp.dest('./dist'))
    cb();
})

gulp.task('watch', function () {
    gulp.watch(['./web/src/**/*.scss', './web/src/**/*.html', './web/src/**/*.js'], gulp.series(['clean', 'sass', 'copy:html', 'copy:js','copy:img']));
})

gulp.task('default', gulp.series(['clean', 'sass', 'copy:html', 'copy:js','copy:img']))