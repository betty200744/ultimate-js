/**
 * Created by betty on 10/24/18.
 */
"use strict";
const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello betty';
});

app.listen(3333);
