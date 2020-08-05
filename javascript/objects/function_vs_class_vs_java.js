/**
 * Created by betty on 8/5/20.
 */
"use strict";

// javascript constructor
function Employee1() {
  this.name = ''
  this.dept = 'general'
}

let e1 = new Employee1()
console.log(e1)


function Manager1() {
  Employee1.call(this)
  this.reports = []
}


let m1 = new Manager1()
console.log(m1)

function WorkerBee1() {
  Employee1.call(this);
  this.projects = [];
}

let w1 = new WorkerBee1()
console.log(w1)

function SalesPerson1() {
  WorkerBee1.call(this);
  this.dept = 'sales';
  this.quota = 100;
}

let s1 = new SalesPerson1()
console.log(s1)

// javascript class

class Employee2 {
  constructor() {
    this.name = ''
    this.dept = 'general'
  }
}

let e2 = new Employee2()
console.log(e2)


// java
/*
public class Employee {
   public String name = "";
   public String dept = "general";
}
* */