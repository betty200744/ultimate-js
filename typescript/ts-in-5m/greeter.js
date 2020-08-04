function greeter(person) {
    return "hello, " + person;
}
var users = ["a", "b", "c"];
var userObject = { "firstName": "betty", "lastName": "zhao" };
console.log(greeter("betty"));
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeterPerson(person) {
    return "hello, " + person.firstName + person.lastName;
}
var stu1 = new Student("betty", "zhao");
console.log(greeterPerson(stu1));
