
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./sass/**/*.scss', gulp.parallel(buildStyles));
};