/**
 * Created by betty on 10/19/18.
 */
"use strict";

const fs = require('fs');

const readable = fs.createReadStream('./fs_stream.js');
const out = fs.createWriteStream('./out.txt');
out.write('hello');

const file = fs.createReadStream('./out.txt');

out.on('pipe', () => {
  console.log('write pipe')
});

out.on('finish', () => {
  console.log('write end');
});

file.on('data', (data) => {
  console.log('read data ');
});

file.on('end', () => {
  console.log('read end');
});

readable.pipe(out);


