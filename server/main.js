import Salt from 'koa-salt';

export default Salt()
    .load('init')
    .load('static')
    .load('router')
    .load('logger');
