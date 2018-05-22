'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequnce');
const del = require('del');
const watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src(`./css/*.scss`)
	.pipe(sass())
	.pipe(gulp.dest(`./build/css`))

});

gulp.task('pug', function() {
	
});

gulp.task('clean', function() {
	del('./build/');
});

gulp.task('default', function() {
	runSequence(
		'clear',
		'sass',
		'pug'
	)
});