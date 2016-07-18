import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build:pack', (callback) => {
    runSequence('jsx:pack', callback);
});

gulp.task('build:dev', (callback) => {
    runSequence('clean', 'jsx:dev', 'sass', callback);
});
