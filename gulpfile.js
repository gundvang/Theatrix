var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('resources/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default',function() {
    gulp.watch('resources/assets/sass/**/*.scss',['styles']);
});