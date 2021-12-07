
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        //.pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/css'));
};
function buildJs() {
    return gulp.src('./js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('all.js'))
        //.pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
};
exports.build = gulp.parallel(buildStyles, buildJs);
exports.watch = function () {
    gulp.watch(['./sass/**/*.scss', './js/**/*.js'], gulp.parallel(buildStyles, buildJs));
};