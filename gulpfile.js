// Top level functions : task - src - dest - watch

// CommonJS
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));

gulp.task('sass', async function() {
    gulp.src('styles.scss').pipe(sass()).pipe(gulp.dest('css'))
})