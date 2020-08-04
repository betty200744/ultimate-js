/**
 * Created by betty on 9/21/18.
 */
"use strict";

const apm = require('elastic-apm-node');

const FLAG = apm.isStarted();

function error (err) {
  if (!FLAG) {
    return;
  }
  apm.captureError(err);
  apm.setTag('error', true);
}

function bindUser (userId, token) {
  if (!FLAG) {
    return;
  }
  userId && apm.setUserContext({id: userId});
  token && apm.setTag('token', token);
  apm.setTag('error', false);
}

module.exports = {
  error,
  bindUser,
};
