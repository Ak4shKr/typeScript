interface Person {
    name: string,
    id: number,
    age: number
}

let p:Person ;
p = {name:'john',id:8006, age: 40} ;


interface Student {
    name: string,
    Roll: number,
    age: number
}

let s:Student ;
s = {name:'john',Roll:8006, age: 40} ;

let p1 : Person | Student;       //union or operation
p1 ={name:'john',Roll:8006,id:2002, age: 40};

let p2 : Person & Student; //intersection and operation
p2 ={name:'Akashi',Roll:232,id: 235, age: 40}


//Type alias

type count = string | number;

let c : count;
c =1;
c= "one";
// c= false; 

type X = string & number;     //never

const n: [] = [];           //never array
// n.push(12);



//class

class Car {
    brand;
    constructor(brand){
        this.brand = brand;
    }
    getBrand(){
        console.log(this.brand);
    }
}


let c1 = new Car ('Audi');
c1.getBrand();


//public class Car
class CarX{
    constructor(public brand) {
    }

    getBrand(){
        console.log(this.brand)
    }
}

let c2 = new CarX('BMW');
c2.getBrand()

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

class CarY{
    constructor(protected brand) {
    }

    getBrand(){
        console.log(this.brand)
    }
}

let c3 = new CarY('VOLVO');
c3.getBrand()


//implements
interface Icar1{
    brand: string,
    model: number
}
interface Icar2{
    release: number
}

class CarC implements Icar1, Icar2{
    constructor(public brand, public model, public release){}
}

//GENERIC
function gen<T> (a: T, b:T):T[] {
    return [a, b]
}

gen<string> ('1', '2')
gen <number>(1,3)

console.log(gen<string> ('1', '2'))
console.log(gen<number> (1, 2))
console.log(gen<Array<number>> ([1], [2]))

//any type
function noRestriction(a:any,b:any): any{
    return a+b;
}

console.log(noRestriction(5,6))