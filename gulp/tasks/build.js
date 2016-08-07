import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build:pack', (callback) => {
    runSequence('dll:pack', 'jsx:pack', callback);
});

gulp.task('build:dev', (callback) => {
    runSequence('clean', 'dll:dev', 'jsx:dev', 'sass', 'watch:css', callback);
});
