import {log} from "./decorator_function";
import {logFac} from "./decorator_factory"

@log // decorator function
export class User1 {
    getUser() {
        return {name: "betty"}
    }
}

@logFac() // decorator factory
export class User2 {
    getUser() {
        return {name: "betty"}
    }
}