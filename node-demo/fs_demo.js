/**
 * Created by betty on 10/12/18.
 */
"use strict";

const fs = require('fs');
const path = require('path');


const files = fs.readdirSync(path.resolve(`${__dirname}`));

files.map((file) => {
  if (fs.existsSync(path.resolve(__dirname, file))) {
    console.log('dd');
  }
});


const file = fs.readFileSync(`${__dirname}/fs_demo.js`, {encoding: 'utf8'});
console.log(file);