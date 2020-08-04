function greeter(person: string) {
    return "hello, " + person
}

let users = ["a", "b", "c"];
let userObject = {"firstName": "betty", "lastName": "zhao"};
console.log(greeter("betty"));

class Student {
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeterPerson(person: Person) {
    return "hello, " + person.firstName + person.lastName;
}

let stu1 = new Student("betty", "zhao");
console.log(greeterPerson(stu1));