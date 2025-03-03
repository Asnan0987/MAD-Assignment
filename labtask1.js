class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying in grade ${this.grade}.`;
    }
}

class Employee extends Person {
    constructor(name, age, position, salary) {
        super(name, age);
        this.position = position;
        this.salary = salary;
    }
    work() {
        return `${this.name} is working as a ${this.position}.`;
    }
}

class Teacher extends Employee {
    constructor(name, age, subject, salary) {
        super(name, age, "Teacher", salary);
        this.subject = subject;
    }
    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}

class Staff extends Employee {
    constructor(name, age, department, salary) {
        super(name, age, "Staff", salary);
        this.department = department;
    }
    manage() {
        return `${this.name} is managing the ${this.department} department.`;
    }
}

const student = new Student("Alice", 16, 10);
console.log(student.introduce());
console.log(student.study());

const teacher = new Teacher("Mr. Smith", 40, "Mathematics", 50000);
console.log(teacher.introduce());
console.log(teacher.teach());

const staff = new Staff("John", 35, "Administration", 40000);
console.log(staff.introduce());
console.log(staff.manage());
