var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Student;
}());
function greeter(person) {
    console.log(person.firstName, person.lastName);
}
var student1 = new Student("betty", "zhao");
greeter(student1);
