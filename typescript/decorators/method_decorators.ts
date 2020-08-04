class Method_decorators {
    n: string

    constructor(name: string) {
        this.n = name
    }

    @foo("a")
    greet() {
        console.log("hello")
    }
}

function foo(value: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        console.log("i am method decorator", value)
    }
}

const md = new Method_decorators("betty")
md.greet()