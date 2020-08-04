/**
 * Created by betty on 9/30/18.
 */
"use strict";
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');

const route = express.Router();

const rawBody = (req, res, next) => {
  req.rawBody = ``;
  req.setEncoding('utf8');
  req.on('data', function (chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function () {
    next();
  });
};

const verifyMiddleware = (req, res, next) => {
  req.body = JSON.parse(req.rawBody);

  const clientSignature = req.headers['x-pingplusplus-signature'];
  const rawData = req.rawData;
  const verifier = crypto.createVerify('RSA-SHA256').update(rawData, 'utf8');
  const pub_key = fs.readFileSync('./pub_key.pem', 'utf8');

  return verifier.verify(pub_key, clientSignature, 'base64');
};

route.use(rawBody());

route.use('/success', verifyMiddleware, (req, res, next) => {

});