/**
 * Created by betty on 9/20/18.
 */
"use strict";

let i = 0;

const net = require('net');

const client = net.connect(3003);

client.on('data', (data) => {
  let [_, time] = data.toString().split('|');
  console.log(i++, Date.now() - time);
});