import Salt from 'koa-salt';

import render from './middlewares/render';
import podata from './middlewares/podata';

export default class Controller extends Salt.Controller {
    render(dir) {
        render.apply(this.ctx, arguments);
    }

    podata(query) {
        podata.apply(this.ctx, arguments);
    }
}
