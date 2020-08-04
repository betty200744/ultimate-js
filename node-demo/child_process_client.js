/**
 * Created by betty on 9/20/18.
 */
"use strict";
let i = 0;


process.on('message', (str) => {
  let [_, time] = str.split('|');
  console.log(i++, Date.now() - time);
});