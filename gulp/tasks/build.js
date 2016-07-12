import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build:pack', (callback) => {
    runSequence('jsx:pack', callback);
});

gulp.task('build:dev', (callback) => {
    runSequence('jsx:dev', callback);
});
