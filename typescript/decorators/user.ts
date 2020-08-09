import {log} from "./decorator_function";
import {logFac} from "./decorator_factory"
import {callLog} from "./method_decorators";
import {logProperty} from "./property_decorators";
import {logParameter} from "./parameter_decorators";

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


export class User3 {
    @callLog() // method decorator
    getUser() {
        return {name: "betty"}
    }
}

export class User4 {
    @logProperty() // property decorator
    name: string

    constructor(name: string) {
        this.name = name
    }

    getUserById(@logParameter() id: string) {
        console.log(id)
        return {name}
    }
}