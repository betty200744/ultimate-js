/**
 * Created by betty on 10/18/18.
 */
"use strict";

const program = require('awesome/commander/commander');

program
  .version('1.0.0')
  .option('-h, --help', 'help')
  .option('-a, --add', 'add a peppers')
  .parse(process.argv);

if (program.help) {
  console.log('your option is -h');
}

