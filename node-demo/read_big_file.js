/**
 * Created by betty on 10/19/18.
 */

"use strict";

const fs = require('fs');
const Promise = require('bluebird');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);


const getFiles = async () => {
  const files = await readdir(__dirname);
  return files.filter(file => /dummy\d+\.csv/.test(file));
};

const readFileTest = async (file) => {
  const label = `readFileTest-${file}`;
  console.time(label);
  const data = await readFile(file, 'utf8');
  const header = data.split(/\n/)[0];
  console.timeEnd(label)
};

const readStreamTest = async (file) => {
  const label = `readStreamTest-${file}`;
  console.time(label);
  const rstream = fs.createReadStream(file, {encoding: 'utf8'});
  rstream.on('data', (data) => {
    const header = data.split(/\n/)[0];
    rstream.destroy();
  });
  rstream.on('close', () => {
    console.timeEnd(label)
  });
};

(async () => {
  const files = await getFiles();
  await Promise.map(files, async (file) => {
    console.log(file);
    await readFileTest(file);
    await readStreamTest(file);
  })
})();

