/**
 * Created by betty on 8/4/20.
 */
"use strict";
const jwt = require('jsonwebtoken')

const secret = 'shhhhh';
var token = jwt.sign({foo: 'bar'}, secret);
try {
  let user = jwt.verify(token, secret)
  console.log(user)
} catch (err) {
  throw err
} finally {
  console.log("always run")
}
