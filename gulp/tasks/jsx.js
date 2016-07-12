/*
 *  处理react文件
 * */
import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';

const webpackConfig = require('../webpack.config.js');
let loaded = false;

var engineWebpack = function(config, callback) {
    webpack(webpackConfig, (err, status) => {
        gutil.log("[webpack]", status.toString({}));

        // 暂时解决callback多次调用的问题，因为webpack不知原因会调用两次
        if(!loaded) {
            loaded = true;
            callback();
        }
    });
}

gulp.task('jsx:pack', (callback) => {
    engineWebpack(webpackConfig, callback);
});
gulp.task('jsx:dev', (callback) => {
    webpack(Object.assign({watch: true}, webpackConfig), (err, status) => {
        gutil.log("[webpack]", status.toString({}));

        // 暂时解决callback多次调用的问题，因为webpack不知原因会调用两次
        if(!loaded) {
            loaded = true;
            callback();
        }
    });
});
