var gulp = require('gulp');
var clean = require('gulp-clean');
var html = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var css = require('gulp-clean-css');
var lang = ['zh', 'en'];

gulp.task('default', ['clean', 'js', 'css', 'image', 'html'], function () {

});

gulp.task('clean', function () {
    return gulp.src('./build/')
        .pipe(clean({force: true}));
});

gulp.task('js', function () {
    for (var i = 0, len = lang.length; i < len; i++) {
        gulp.src(['./public/js/*.js', './public/js/lang/' + lang[i] + '/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('./build/' + lang[i] + '/js/'));
    }
});

gulp.task('css', function () {
    for (var i = 0, len = lang.length; i < len; i++) {
        gulp.src(['./public/css/*.css', './public/css/lang/' + lang[i] + '/*.css'])
            .pipe(css({keepSpecialComments: 0}))
            .pipe(gulp.dest('./build/' + lang[i] + '/css/'));
    }
});

gulp.task('image', function () {
    for (var i = 0, len = lang.length; i < len; i++) {
        gulp.src(['./public/image/*.png', './public/image/lang/' + lang[i] + '/*.png'])
            .pipe(gulp.dest('./build/' + lang[i] + '/image/'));
    }
});

gulp.task('html', function () {
    for (var i = 0, len = lang.length; i < len; i++) {
        gulp.src('./public/*.html')
            .pipe(html())
            .pipe(gulp.dest('./build/' + lang[i]))
    }
});


gulp.task('replace', function () {
    for (var i = 0, len = lang.length; i < len; i++) {
        gulp.src(['./build/' + lang[i] + '/js/global.js'])
            .pipe(replace('<lang>', lang[i]))
            .pipe(gulp.dest('./build/' + lang[i] + '/js/'));
    }
});