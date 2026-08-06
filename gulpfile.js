const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss =require('gulp-purgecss')

function buildStylesToCss() {
    return src('sass/**/*.scss')       // source SCSS file
        .pipe(sass().on('error', sass.logError)) // compile + handle errors
        .pipe(purgecss({content:['**/*.html']}))// help to remove unused styles
        .pipe(dest('css'));        // output folder
}

function watchTask() {
    watch(['sass/**/*.scss','*.html'], buildStylesToCss); // watch file changes
}

exports.default = series(buildStylesToCss, watchTask);