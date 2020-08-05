/**
 * Created by betty on 8/5/20.
 */
"use strict";

const fs = require("async-file");

async function print(path) {
  let dir = await fs.readdir(path);
  for (let fi of dir) {
    console.log(fi)
  }
}

Promise.all([print("../")]).then((messages) => {
  console.log(messages[0])
}).catch(err => {
  console.log(err)
})