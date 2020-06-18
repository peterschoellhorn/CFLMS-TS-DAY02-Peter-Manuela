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
var Vehicle = /** @class */ (function () {
    function Vehicle(a, b, c, d, e, f) {
        this.kilometers = "";
        this.fuel_type = "";
        this.year = "";
        this.id = "";
        this.number_seat = "";
        this.model = "";
        this.kilometers = a;
        this.fuel_type = b;
        this.year = c;
        this.id = d;
        this.number_seat = e;
        this.model = f;
    }
    Vehicle.prototype.showInfo = function () {
        // let output:string;
        return "Model: " + this.model + " <br>KM:  " + this.kilometers + "  <br> powered by:  \n         " + this.fuel_type + " <br> production year:  " + this.year + "\n         <br> number of seats: " + this.number_seat;
    };
    return Vehicle;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(a, b, c, d, e, f, g) {
        var _this = _super.call(this, a, b, c, d, e, f) || this;
        _this.loadingArea = g;
        return _this;
    }
    Truck.prototype.showTruckInfo = function () {
        return _super.prototype.showInfo.call(this) + " <br> Loading Area: " + this.loadingArea + "m\u00B2\n        ";
    };
    return Truck;
}(Vehicle));
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(a, b, c, d, e, f, g) {
        var _this = _super.call(this, a, b, c, d, e, f) || this;
        _this.helmetColor = g;
        return _this;
    }
    Motorbike.prototype.showMotorInfo = function () {
        return _super.prototype.showInfo.call(this) + " <br> Helmet Color: " + this.helmetColor + "\n        ";
    };
    return Motorbike;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(a, b, c, d, e, f, g) {
        var _this = _super.call(this, a, b, c, d, e, f) || this;
        _this.Color = g;
        return _this;
    }
    Bike.prototype.showBicycleInfo = function () {
        return "production year: " + this.year + " <br> Color: " + this.Color + "\n        ";
    };
    return Bike;
}(Vehicle));
var Auto1 = new Vehicle(2000, "gasoline", "2010", 1, 5, "SUV");
var Auto2 = new Vehicle(500, "gasoline", "2015", 2, 2, "Sportscar");
var Auto3 = new Truck(500, "diesel", "2018", 3, 2, "Hummer", 5);
var Bike2 = new Motorbike(20000, "gasoline", "1978", 4, 2, "Triumph", "blue");
var Auto4 = new Truck(500, "diesel", "2016", 5, 2, "Nissan Navarra", 5);
var Fahrrad = new Bike(500, "", "2016", 5, 2, "Holland", "green");
document.getElementById("output1").innerHTML = Auto1.showInfo();
document.getElementById("output2").innerHTML = Auto2.showInfo();
document.getElementById("output3").innerHTML = Auto3.showTruckInfo();
document.getElementById("output4").innerHTML = Bike2.showMotorInfo();
document.getElementById("output5").innerHTML = Auto4.showTruckInfo();
document.getElementById("output6").innerHTML = Fahrrad.showBicycleInfo();
console.log(Auto1.kilometers);
