@foo
class Class_decorators {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        console.log("hello", this.greeting)
    }
}

function foo(cons: Function) {
    console.log("i am class decorators: ", cons.length)
}

const cd = new Class_decorators("betty")
cd.greet()