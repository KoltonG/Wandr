/*jslint esnext: true */
/******************************/
/********** PACKAGES **********/
/******************************/
const gulp = require('gulp');
const sass = require('gulp-sass');

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
gulp.task('sass', () => {
  gulp.src('./app/public/stylesheets/main.scss')
  .pipe(sass.sync(sassObj).on('error', sass.logError))
  .pipe(gulp.dest('./app/public/stylesheets/css'));
});

// When there is a change in the sass files, call the sass task
gulp.task('sass:watch', () => {
  gulp.watch('./app/public/stylesheets/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch'], () => {
  gulp.run('sass'); 
  gulp.run('sass:watch');
});

