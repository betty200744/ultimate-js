/**
 * Created by betty on 9/21/18.
 */
"use strict";


const Raven = require('raven');

const enable = () => {
  return false;
};

const install = (app) => {
  if (enable()) {
// Must configure Raven before doing anything else with it
    Raven.config('xxxx').install();
// The request handler must be the first middleware on the app
    app.use(Raven.requestHandler());
  }
};

const log = (err, req) => {
  if (enable()) {
    Raven.captureException(err, {req});
  }
};

module.exports = {install, log};