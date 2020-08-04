class Student {
    private fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    console.log(person.firstName, person.lastName)
}

let student1 = new Student("betty", "zhao");
greeter(student1);
