/**
 * Created by betty on 8/6/20.
 */
"use strict";

const UserBuild = require('./builder')

describe('Builder', async () => {
  it('UserBuild', async () => {
    let userBuild = new UserBuild()
    let user = userBuild
      .Name("betty")
      .Role("admin")
      .MaxSalary(1000)
      .Build()
    expect(user.name).toEqual("betty")
  });
})