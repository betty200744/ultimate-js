/**
 * Created by betty on 8/6/20.
 */
"use strict";

class reception {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  execute(patient) {
    console.log("reception done, patient is :", patient)
    this.next.execute(patient)
  }
}

class docker {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  execute(patient) {
    console.log("docker done, patient is :", patient)
    this.next.execute(patient)
  }
}

class medical {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  execute(patient) {
    console.log("medical done, patient is :", patient)
  }
}

module.exports = {reception, docker, medical}