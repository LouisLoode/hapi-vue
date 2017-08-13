const serve = require('koa-static');
const mount = require('koa-mount');
const Koa = require('koa');

const static_pages = new Koa();
static_pages.use(serve('static'));

const app = new Koa();
app.use(mount('/static', static_pages))
