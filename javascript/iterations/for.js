/**
 * Created by betty on 8/4/20.
 */
"use strict";

const fs = require('fs');

function getFiles() {
  let dir = fs.readdirSync("./")
  // traditional for
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  // for of , value
  for (let fi of dir) {
    console.log(fi)
  }
  // for in , index
  for (let i in dir) {
    console.log(i)
  }
}

getFiles()
