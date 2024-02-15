var p;
p = { name: 'john', id: 8006, age: 40 };
var s;
s = { name: 'john', Roll: 8006, age: 40 };
var p1; //union or operation
p1 = { name: 'john', Roll: 8006, id: 2002, age: 40 };
var p2; //intersection and operation
p2 = { name: 'Akashi', Roll: 232, id: 235, age: 40 };
var c;
c = 1;
c = "one";
var n = []; //never array
// n.push(12);
//class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return Car;
}());
var c1 = new Car('Audi');
c1.getBrand();
//public class Car
var CarX = /** @class */ (function () {
    function CarX(brand) {
        this.brand = brand;
    }
    CarX.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarX;
}());
var c2 = new CarX('BMW');
c2.getBrand();
//private class car
// class CarY{
//     constructor(private brand) {
//     }
//     getBrand(){
//         console.log(this.brand)
//     }
// }
// let c3 = new CarY('VOLVO');
// c3.getBrand()
//protected
var CarY = /** @class */ (function () {
    function CarY(brand) {
        this.brand = brand;
    }
    CarY.prototype.getBrand = function () {
        console.log(this.brand);
    };
    return CarY;
}());
var c3 = new CarY('VOLVO');
c3.getBrand();
var CarC = /** @class */ (function () {
    function CarC(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
    return CarC;
}());
//GENERIC
function gen(a, b) {
    return [a, b];
}
gen('1', '2');
gen(1, 3);
console.log(gen('1', '2'));
console.log(gen(1, 2));
console.log(gen([1], [2]));
//any type
function noRestriction(a, b) {
    return a + b;
}
console.log(noRestriction(5, 6));
