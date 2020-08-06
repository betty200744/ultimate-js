/**
 * Created by betty on 8/6/20.
 */
"use strict";

// restricts object creation for a class to only one instance.
// 创建一个单例， 即无论创建多少次都首次创建的实例

let _instance = null

class IdGenerator {
  constructor() {
    if (!_instance) {
      _instance = this
    } else {
      return _instance
    }
  }

  getId() {
    return Math.random()
  }
}

module.exports = IdGenerator