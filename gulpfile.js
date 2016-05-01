/*jslint esnext: true */
/******************************/
/********** PACKAGES **********/
/******************************/
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

var sassObj = {
  outputStyle: 'expanded',
  sourceComments: true
};

if(process.env.NODE_ENV === 'PRODUCTION'){
  sassObj.outputStyle = 'compressed';
  sassObj.sourceComments = false;
}

/********************************/
/********** GULP TASKS **********/
/*******************************/
// Complile sass into css
gulp.task('sass', function() {
  gulp.src('./app/public/stylesheets/main.scss')
    .pipe(sass.sync(sassObj).on('error', sass.logError))
    .pipe(gulp.dest('.'));
});

// When there is a change in the sass files, call the sass task
gulp.task('sass:watch', function() {
  gulp.watch('./app/public/stylesheets/**/*.scss', ['sass']);
});

// Concatenate all the javascript files
gulp.task('concat', function() {
  gulp.src(['./app/public/javascripts/app.js', './app/public/javascripts/vendors/*', 
    './app/public/javascripts/controllers/*'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('.'));
});

// When there is a change in the sass files, call the sass task
gulp.task('concat:watch', function() {
  gulp.watch('./app/public/javascripts/**/*.js', ['concat']);
  gulp.watch('./app/public/javascripts/*.js', ['concat']);
});

gulp.task('default', ['sass', 'sass:watch'], () => {
  gulp.run('sass'); 
  gulp.run('sass:watch');
  gulp.run('concat');
  gulp.run('concat:watch');
});

