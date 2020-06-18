class Vehicle { // ①
    kilometers =""; 
    fuel_type = ""; 
    year= "";
    id="";
    number_seat="";
    model="";

 constructor(a, b, c, d,e,f) { 
        this.kilometers = a;
        this.fuel_type = b;
        this.year = c;
        this.id=d;
        this.number_seat=e; 
        this.model=f;     
    } 

    showInfo() { 
        // let output:string;

        return `Model: ${this.model} <br>KM:  ${this.kilometers}  <br> powered by:  
         ${this.fuel_type} <br> production year:  ${this.year}
         <br> number of seats: ${this.number_seat}`;

 
    
    }

    
}


class Truck extends Vehicle{
    loadingArea;


    constructor(a, b, c, d,e,f,g) { 
        super(a,b,c,d,e,f)
        this.loadingArea = g;  
    } 

    showTruckInfo(){
        return `${super.showInfo()} <br> Loading Area: ${this.loadingArea}m²
        ` 

    }

}

class Motorbike extends Vehicle{
    helmetColor;


    constructor(a, b, c, d,e,f,g) { 
        super(a,b,c,d,e,f)
        this.helmetColor = g;  
    } 

    showMotorInfo(){
        return `${super.showInfo()} <br> Helmet Color: ${this.helmetColor}
        ` 

    }

}

class Bike extends Vehicle{
    Color;

    constructor(a, b, c, d,e,f,g) { 
        super(a,b,c,d,e,f)
        this.Color = g;  
    } 

    showBicycleInfo(){
        return `production year: ${this.year} <br> Color: ${this.Color}
        ` 
    }

}

let Auto1 = new Vehicle(2000,"gasoline","2010",1, 5,"SUV");
let Auto2 = new Vehicle(500,"gasoline","2015",2, 2,"Sportscar");
let Auto3 = new Truck(500,"diesel","2018",3, 2,"Hummer",5);
let Bike2 = new Motorbike(20000,"gasoline","1978",4, 2,"Triumph","blue");
let Auto4 = new Truck(500,"diesel","2016",5, 2,"Nissan Navarra",5);
let Fahrrad = new Bike(500,"","2016",5, 2,"Holland","green");


document.getElementById("output1").innerHTML = Auto1.showInfo()
document.getElementById("output2").innerHTML = Auto2.showInfo()
document.getElementById("output3").innerHTML = Auto3.showTruckInfo()
document.getElementById("output4").innerHTML = Bike2.showMotorInfo()
document.getElementById("output5").innerHTML = Auto4.showTruckInfo()
document.getElementById("output6").innerHTML = Fahrrad.showBicycleInfo()


console.log(Auto1.kilometers);

