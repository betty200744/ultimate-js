/**
 * Created by betty on 9/30/18.
 */
"use strict";
const crypto = require('crypto');

/**
 * create hash , hash method: sha256, digest: hex
 */
const hash = crypto.createHash('sha256').update('this is a hash').digest('hex');
console.log(`this is hash: ${hash}`);


/**
 * createCipher  , createDecipher
 */

const salt = 'salt';
function createCipher () {
  return crypto.createCipher('aes192', salt);
}

function encrypt (s) {
  const cipher = createCipher();
  cipher.update(s);
  return cipher.final('hex');
}

function createDecipher () {
  return crypto.createDecipher('aes192', salt);
}

function decrypt (s) {
  if (!s) {
    return s;
  }
  const decipher = createDecipher();
  decipher.update(s, 'hex');
  return decipher.final('utf-8');
}

const password = encrypt('zhaoyl');
console.log(`this is password: ${password}`);
const reveal = decrypt(password);
console.log(`this is reveal: ${reveal}`);
