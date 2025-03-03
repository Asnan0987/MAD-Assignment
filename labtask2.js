class Employee {
    constructor(name, dep) {
        this.name = name;
        this.dep = dep;
    }
    intro() {
        return `My name is ${this.name} and my department is ${this.dep}`;
    }
}

class Manager extends Employee{
    constructor(name ,dep , reports){
        super(name,dep);
        this.reports=reports
    }
    intro() {
        return `My name is ${this.name}, my department is ${this.dep} and following is mine report ${this.reports}`;
    }
}
class WorkerBee extends Employee{
    constructor(name ,dep ,projects){
        super(name,dep);
        this.projects=projects
    }
    intro() {
        return `My name is ${this.name}, my department is ${this.dep}and following is mine projects ${this.projects}`;
    }
}
class SalesPerson extends WorkerBee{
    constructor(name ,dep ,projects,quota){
        super(name,"Sales",projects);
        this.quota=quota;
    }
    intro() {
        return `My name is ${this.name}, my department is ${this.dep}and following is mine projects ${this.projects} and this is mine quota ${this.quota}`;
    }
}
class Engineer extends WorkerBee{
    constructor(name ,dep ,projects,machine){
        super(name,"Engineering",projects);
        this.machine=machine;
    }
    intro() {
        return `My name is ${this.name}, my department is ${this.dep}and following is mine projects ${this.projects} and following machine is used by me ${this.machine}`;
    }
}

const employee = new Employee("Alice", "HR");
console.log(employee.intro());

const manager = new Manager("Bob", "Finance", ["Report1", "Report2"]);
console.log(manager.intro());

const workerBee = new WorkerBee("Charlie", "Development", ["ProjectA", "ProjectB"]);
console.log(workerBee.intro());

const salesPerson = new SalesPerson("David", "Sales", ["ClientA", "ClientB"], 50000);
console.log(salesPerson.intro());

const engineer = new Engineer("Eve", "Engineering", ["SystemX", "SystemY"], "CNC Machine");
console.log(engineer.intro());