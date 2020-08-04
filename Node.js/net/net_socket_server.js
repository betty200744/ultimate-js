/**
 * Created by betty on 9/20/18.
 */
"use strict";
const net = require('net');

let data = [1024 * 1024].fill('0').join('');

const server = net.createServer((c) => {
  setInterval(() => {
    let i = 100;
    while (i--) {
      c.write(`${data} | ${Date.now()}`);
    }
  }, 1000);


});
server.listen(3003);

