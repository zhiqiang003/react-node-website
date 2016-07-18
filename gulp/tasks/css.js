import gulp from 'gulp';
import config from 'config';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import scss from 'postcss-scss';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sprites from 'postcss-sprites';

const cssPath = config.path.css;
const opts = {
    stylesheetPath: cssPath.dest,
    spritePath: config.path.image.dest
};

gulp.task('sass', () => {
    return gulp.src(cssPath.src + '/base.scss')
        .pipe(postcss([
            precss,
            autoprefixer,
            sprites(opts)
        ], {
            syntax: scss
        }))
        .pipe(rename({extname: '.css'}))
        .pipe(gulp.dest(cssPath.dest));
});
