'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src(`./css/*.scss`)
	.pipe(sass())
	.pipe(gulp.dest(`./css`))

});

gulp.task('default', function() {

})