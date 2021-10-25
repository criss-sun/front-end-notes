class Student {
  fullName: string
  constructor(public firstName, public lastName) {
    this.fullName = firstName + lastName
  }
  showName() {
    return this.fullName
  }
}

interface person {
  firstName: string,
  lastName: string
}
function greeter(person: person) {
  return person.firstName + person.lastName;
}

let user = {
  firstName: 'monkey',
  lastName: 'king'
}

// console.log(greeter(user));
const student = new Student('monkey', 'king')
// console.log(student.showName);
