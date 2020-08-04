var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Method_decorators = /** @class */ (() => {
    class Method_decorators {
        constructor(name) {
            this.n = name;
        }
        greet() {
            console.log("hello");
        }
    }
    __decorate([
        foo("a")
    ], Method_decorators.prototype, "greet", null);
    return Method_decorators;
})();
function foo(value) {
    return function (target, key, descriptor) {
        console.log("i am method decorator", value);
    };
}
const md = new Method_decorators("betty");
md.greet();
