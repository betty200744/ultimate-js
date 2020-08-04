var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Class_decorators = /** @class */ (() => {
    let Class_decorators = class Class_decorators {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            console.log("hello", this.greeting);
        }
    };
    Class_decorators = __decorate([
        foo
    ], Class_decorators);
    return Class_decorators;
})();
function foo(cons) {
    console.log("i am class decorators: ", cons.length);
}
const cd = new Class_decorators("betty");
cd.greet();
