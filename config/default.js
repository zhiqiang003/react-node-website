import path from 'path';
import packson from '../package.json';

const rootPath = path.dirname(__dirname);
const __root = dir => path.join(rootPath, dir);
const port = 8787;

export default Object.assign({}, packson, {
    port,
    path: {
        // client
        assets: __root('assets'),
        css: {
            src: __root('app/styles/sass'),
            dest: __root('assets/css')
        },
        image: {
            src: __root('app/styles/images'),
            dest: __root('assets/images')
        },
        font: {
            src: __root('app/styles/fonts'),
            dest: __root('assets/fonts')
        },
        js: {
            entry: __root('app/pages'),
            dest: __root('assets/scripts')
        },

        fonts: {
        },

        // server
        app: __root('server/main.js'),
        routes: __root('server/routes'),
        extensions: __root('server/extensions'),
        middlewares: __root('server/middlewares'),
        controllers: __root('server/controllers'),
        views: __root('server/views')
    }
});
