/**
 * Created by betty on 8/5/20.
 */
"use strict";

function Employee(name, dept) {
  this.name = name
  this.dept = dept
}
function Manager(name, dept, reports) {
  Employee.call(this, name, dept)
  this.reports = reports
}

let manager = new Manager("betty", "backend", "cc")
console.log(manager)