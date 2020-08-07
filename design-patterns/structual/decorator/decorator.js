/**
 * Created by betty on 8/7/20.
 */
"use strict";

// dynamically adds/overrides behaviour in an existing method of an object.
// 动态的给object的method添加behaviour

class User {
  constructor(firstName, lastName, title) {
    this.firstName = firstName
    this.lastName = lastName
    this.title = title
  }

  getFullName() {
    return this.firstName + this.lastName
  }
}

class UserDecorator {
  constructor(user) {
    this.user = user
  }

  getFullNameWithTitle() {
    return this.user.title + this.user.getFullName()
  }
}

module.exports = {User, UserDecorator}