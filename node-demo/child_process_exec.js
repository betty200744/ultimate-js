/**
 * Created by betty on 10/16/18.
 */
"use strict";

const child_process = require('child_process');

const child = child_process.exec('node');

const r = child.send('1+ 2');
console.log(r);
