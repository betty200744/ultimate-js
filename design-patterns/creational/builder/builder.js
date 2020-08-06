/**
 * Created by betty on 8/6/20.
 */
"use strict";

class User {
  constructor() {
    this.name = ""
    this.role = ""
    this.maxsalary = 0
    this.minsalary = 1
  }
}

class UserBuild {
  constructor() {
    this.user = new User()
  }

  Build() {
    return this.user
  }

  Name(name) {
    this.user.name = name
    return this
  }

  Role(role) {
    this.user.role = role
    return this
  }

  MaxSalary(max) {
    this.user.maxsalary = max
    return this
  }
}

module.exports = UserBuild