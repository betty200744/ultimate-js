/**
 * Created by betty on 8/6/20.
 */
"use strict";


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