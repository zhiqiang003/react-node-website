import gulp from 'gulp';
import config from 'config';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import scss from 'postcss-scss';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

const cssPath = config.path.css;

gulp.task('sass', () => {
    return gulp.src(cssPath.src + '/base.scss')
            .pipe(postcss([precss, autoprefixer], {syntax: scss}))
            .pipe(rename({extname: '.css'}))
            .pipe(gulp.dest(cssPath.dest));
});
