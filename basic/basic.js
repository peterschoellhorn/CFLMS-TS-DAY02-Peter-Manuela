var arr = [];
var Person = /** @class */ (function () {
    function Person(name, age, jobtitle) {
        this.name = "";
        this.age = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobtitle;
        arr.push(this.name, this.age, this.jobTitle);
    }
    Person.prototype.outputName = function () {
        return "Hello there! My name is " + this.name + " and I am \n     " + this.age + " and I am a  " + this.jobTitle;
    };
    return Person;
}());
var Name1 = new Person("Manu", "41", "web developer");
var Name2 = new Person("Peter", "36", "expression dancer");
// console.log(outputName.Name1());
console.log(Name1.outputName());
console.log(Name2.outputName());
console.log(arr);
