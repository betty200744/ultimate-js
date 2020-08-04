/**
 * Created by betty on 9/20/18.
 */
"use strict";

const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  [1, 2, 3, 4].map( () => {
      const work = cluster.fork();
      console.log(work.id);
  });
} else (
  http.createServer((req, res) => {
    res.writeHead(200);
  }).listen(3002)
);