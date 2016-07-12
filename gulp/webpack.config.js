import config from 'config';
import fs from 'fs';
import path from 'path';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

let { entry } = config.path.js;
let entries = {};
fs.readdirSync(entry).forEach((item) => {
    entries[item] = path.join(entry, item, 'Index.js');
});

export default {
    entry: entries,
    output: {
        path: config.path.js.dest,
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [{
			test: /\.(es6|js|jsx)$/,
			exclude: /(node_modules(?!\/@youzan))/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0'],
                plugins: ['add-module-exports', 'transform-decorators-legacy']
			}
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
        }, {
            test: /\.css$/,
            loader: 'style!css'
		}, {
            test: /\.scss$/,
            loader: 'style!css!postcss'
        }]
    },
    postcss: function() {
        return [precss, autoprefixer];
    },
    devtool: 'source-map',
    plugins: [new LiveReloadPlugin()]
}
