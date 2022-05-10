// Top level functions : task - src - dest - watch

// CommonJS
const gulp = require('gulp');
// ES module
// import gulp from 'gulp';

gulp.task('log', async function() {
    console.log('logging');
})

gulp.task('move', async function() {
    gulp.src('css1/*.css').pipe(gulp.dest('css2'))
})

gulp.task('watching', async function() {
    gulp.watch('css1/styles.css', async function() {
        gulp.src('css1/*.css').pipe(gulp.dest('css2'))
    })
})