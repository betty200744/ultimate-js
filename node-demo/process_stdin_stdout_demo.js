/**
 * Created by betty on 11/2/18.
 */
"use strict";

const {stdin, stdout} = process;

stdin.setEncoding('utf8');

stdin.on('readable', () => {
  const chunk = stdin.read();
  console.log(chunk);
});

