"use strict";
var _a;
let phoneNumber = 123456789;
let Name = "TypeScript";
let isPublished = true;
let age = 25;
let findMyDataType;
let numberList = [1, 2, 3];
let Data = [1, "HEllo", true];
Data.push(2);
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = { id: 1, name: "Hello" };
let employees = { id: 2, name: "john" };
let employeesList = {
    id: 2,
    name: "john",
    retire: (date) => {
        console.log(date);
    }
};
let emp = {
    id: 2,
    name: "john"
};
function kgToLbs(weight) {
    if (typeof (weight) === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10') + " With a String");
let weightOf;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let Quantity = 100;
let quan = 100;
let checkName = "john";
function greet(myName) {
    console.log(myName.toUpperCase());
}
function greeting(myName) {
    if (myName)
        console.log(myName.toUpperCase());
    else
        console.log("This is either Null or Undefined Value");
}
greeting(null);
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map