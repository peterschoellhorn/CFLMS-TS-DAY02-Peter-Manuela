var arr = [];
class Person { // ①
    name =""; 
    age = ""; 
    jobTitle= ""; 


 constructor(name, age, jobtitle) { 
        this.name = name;
        this.age = age;
        this.jobTitle = jobtitle;
        
        arr.push(this.name, this.age, this.jobTitle);
    }


outputName() { 

    return `Hello there! My name is ${this.name} and I am 
     ${this.age} and I am a  ${this.jobTitle}`;
}

}

    var Name1 = new Person("Manu","41","web developer");
    var Name2 = new Person("Peter","36","expression dancer");

   // console.log(outputName.Name1());
   console.log(Name1.outputName());
   console.log(Name2.outputName());

   console.log(arr);

