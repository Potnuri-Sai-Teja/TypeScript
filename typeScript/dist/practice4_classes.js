"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = void 0;
class Employees {
    constructor(Name, Age, Position, Role, isWorking) {
        this.Name = Name;
        this.Age = Age;
        this.Position = Position;
        this.Role = Role;
        this.isWorking = isWorking;
    }
    display() {
        console.log(this.Name + " As  " + this.Position + " Role of " + this.Role);
    }
    printWorkingOrNot() {
        return `${this.Name} ${this.isWorking ? 'is' : 'isnot'} Working `;
    }
}
exports.Employees = Employees;
class Company extends Employees {
    constructor() {
        super(...arguments);
        this.id = '';
        this.email = '';
    }
    createAccount() {
        let companyName = "Imag";
        let emailid = "@imaginnovate.com";
        this.id = companyName.concat(this.Name, Math.floor(Math.random() * 1000).toString());
        this.email = this.Name.toLowerCase().concat(emailid);
        console.log("Employee Id : " + this.id);
        console.log("Employee EmailId : " + this.email);
    }
}
let emp1 = new Company("Teja", 25, "Intern", "Front End Developer", true);
let emp2 = new Company("Teja", 25, "Intern", "Front End Developer", true);
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUE"] = 2] = "TUE";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
    DaysOfWeek[DaysOfWeek["THU"] = 4] = "THU";
    DaysOfWeek[DaysOfWeek["FRI"] = 5] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 6] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
let Day;
Day = DaysOfWeek.THU;
class Q1 extends Employees {
}
class Q2 extends Employees {
}
function employeeEcho(person) {
    person.Name;
    return person;
}
let Q11 = new Q1("Teja", 25, "Intern", "Front End Developer", true);
let checking = employeeEcho(Q11);
//# sourceMappingURL=practice4_classes.js.map