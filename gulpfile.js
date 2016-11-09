const gulp = require('gulp');
const pug  = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('app/renderer/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/dist/renderer/css/'));
});

gulp.task('build', ['styles'], () => {
  gulp.src('app/renderer/pug/*')
    .pipe(pug())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('default', ['build']);
