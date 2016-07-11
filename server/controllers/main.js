import Controller from '../controller';
import config from 'config';
import path from 'path';
import fs from 'fs';

export default class Main extends Controller {
    *index() {
        this.render({
            page: 'index'
        })
    }

    *test() {
        this.render({
            page: 'test'
        })
    }
}
