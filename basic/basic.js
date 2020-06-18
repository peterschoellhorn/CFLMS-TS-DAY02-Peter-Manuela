var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Example
var arr = [];
var Person = /** @class */ (function () {
    function Person(name, age, jobtitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobtitle;
    } //   arr.push(this.name, this.age, this.jobTitle);
    Person.prototype.outputName = function () {
        return "Hello there! My name is " + this.name + " and I am \n     " + this.age + " and I am a  " + this.jobTitle;
    };
    return Person;
}());
// Example 2
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, age, jobtitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobtitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
        // arr.push(super.name, super.age, super.jobTitle, this.salary,this.jobLocation);
    }
    employee.prototype.showInfoEmployer = function () {
        return _super.prototype.outputName.call(this) + " and i earn " + this.salary + " \n        and i work in " + this.jobLocation;
    };
    return employee;
}(Person));
var Name1 = new Person("Manu", "41", "web developer");
var Name2 = new Person("Peter", "36", "expression dancer");
// console.log(outputName.Name1());
console.log(Name1.outputName());
console.log(Name2.outputName());
var Name3 = new employee("Manu", "41", "web developer", 50000, "Vienna");
var Name4 = new employee("Peter", "36", "expression dancer", 60000, "Vienna");
// console.log(outputName.Name1());
console.log(Name3.showInfoEmployer());
console.log(Name4.showInfoEmployer());
//let text = ${#output};
//  console.log(arr);
