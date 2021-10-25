var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    Student.prototype.showName = function () {
        return this.fullName;
    };
    return Student;
}());
function greeter(person) {
    return person.firstName + person.lastName;
}
var user = {
    firstName: 'monkey',
    lastName: 'king'
};
// console.log(greeter(user));
var student = new Student('monkey', 'king');
// console.log(student.showName);
