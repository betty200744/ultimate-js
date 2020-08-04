/**
 * Created by betty on 9/20/18.
 */
"use strict";

/**
 * child_process_master, is the parent process
 * child_process_master, is the parent的childProcess
 */

const child_process = require('child_process');
const child =child_process.fork('./child_process_client');

let data = [1024 * 1024].fill('0').join('');

setInterval(() => {
  let i = 100;
  while (i--) {
    // child_process_client.js将收到该下次， process.on('message')
    child.send(`${data} | ${Date.now()}`);
  }
}, 1000);

/**
 * child process stdout, stderr
 */

process.on('message', (data) => {
  console.log(data.toString());
});


