//Example
var arr = [];
class Person { // ①
    name =""; 
    age = ""; 
    jobTitle= ""; 


 constructor(name, age, jobtitle) { 
        this.name = name;
        this.age = age;
        this.jobTitle = jobtitle;
        

    }     //   arr.push(this.name, this.age, this.jobTitle);


outputName() { 

    return `Hello there! My name is ${this.name} and I am 
     ${this.age} and I am a  ${this.jobTitle}`;
}

}

// Example 2
class employee extends Person{
    salary;
    jobLocation;

    constructor(name, age, jobtitle,salary, jobLocation){
        super(name, age, jobtitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
       // arr.push(super.name, super.age, super.jobTitle, this.salary,this.jobLocation);
    }

    showInfoEmployer(){
        return `${super.outputName()} and i earn ${this.salary} 
        and i work in ${this.jobLocation}` 
    }

}

    var Name1 = new Person("Manu","41","web developer");
    var Name2 = new Person("Peter","36","expression dancer");

   // console.log(outputName.Name1());
   console.log(Name1.outputName());
   console.log(Name2.outputName());

   var Name3 = new employee("Manu","41","web developer",50000,"Vienna");
   var Name4 = new employee("Peter","36","expression dancer",60000,"Vienna");

  // console.log(outputName.Name1());
  console.log(Name3.showInfoEmployer());
  console.log(Name4.showInfoEmployer());


   //let text = ${#output};

   

 //  console.log(arr);

