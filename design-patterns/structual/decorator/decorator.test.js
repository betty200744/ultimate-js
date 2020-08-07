/**
 * Created by betty on 8/7/20.
 */
"use strict";
const expect = require('chai').expect;

const dec = require('./decorator')

describe('dec', async () => {
  it('UserDecorator', async () => {
    let user = new dec.User("betty", "zhao", "backend")
    let userDecorator = new dec.UserDecorator(user)
    user.getFullName()
    let res = userDecorator.getFullNameWithTitle()
    expect(res).to.contain("backend")
  });
})