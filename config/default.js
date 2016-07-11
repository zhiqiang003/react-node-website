import path from 'path';
import packson from '../package.json';

const rootPath = path.dirname(__dirname);
const port = 8787;
const __root = dir => path.join(rootPath, dir);

export default Object.assign({}, packson, {
    port,
    path: {
        // client
        assets: __root('assets'),
        // server
        app: __root('server/main.js'),
        routes: __root('server/routes'),
        extensions: __root('server/extensions'),
        controllers: __root('server/controllers'),
        views: __root('server/views')
    }
});
