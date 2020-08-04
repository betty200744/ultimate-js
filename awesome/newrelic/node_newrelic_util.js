/**
 * Created by betty on 9/21/18.
 */
"use strict";

let newrelic;
const needRewrelic = process.env.newrelic === 'true' && process.env.NODE_ENV === 'production' && process.env.esapm !== 'true';


if (needRewrelic) {
  newrelic = require('newrelic');
}

const log = (e) => {
  if (needRewrelic) {
    newrelic.noticeError(e);
  }
};

const param = (key, value) => {
  if (needRewrelic) {
    newrelic.addCustomParameter(key, value);
  }
};

module.exports = {
  log,
  param,
};
