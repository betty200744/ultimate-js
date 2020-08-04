/**
 * Created by betty on 10/30/18.
 */
"use strict";
const domain = require('domain');
const Koa = require('koa');
const sendDomain = domain.create();
const EventEmitter = require('events');

sendDomain.on('error', (err) => {
  console.log(`this is on error, ${err}`);
});

sendDomain.run(() => {
  const app = new Koa();
  app.use(async (ctx) => {
    const emitter = new EventEmitter();
    emitter.emit('error', 'test');
    throw new Error(`this is throw error`);
  });
  app.listen(3000);

});

/*
const app = new Koa();
app.use( async (ctx) => {
  const emitter = new EventEmitter();
  emitter.emit('error', 'test');
  throw new Error(`this is throw error`);
});
app.listen(3000);
*/








