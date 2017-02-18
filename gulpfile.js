var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

// build task for ts project
gulp.task('build', function() {
  var tsResult = gulp.src('./app/**/*.ts').pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('./built/app'));
});

// watch for all *.ts file, and build them automatically
gulp.task('watch', ['build'], function() {
  gulp.watch('./**/*.ts', ['build']);
})