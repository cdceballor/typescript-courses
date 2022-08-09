// Generic with interface
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

// *************************************************************************

// Generic with interface and function
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

// **************************************************************************

// Generic with class
interface ProcessIdentityC<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentityC<X, Y> implements ProcessIdentityC<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processorC = new processIdentityC<number, string>(100, 'Hello');
processorC.process();           // Displays 'Hello'
// processorC.value = '100';       // Type check error

// **************************************************************************

// Generic class

class processIdentityCG<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processorCG = new processIdentityCG<number, string>(100, 'Hello');
processorCG.getIdentity();      // Displays 'Hello'

// *************************************************************************

// Implementing a class type with generic specification

class CarC {
    make: string = 'Generic CarC';
    doors: number = 4;
}
class ElectricCarC extends CarC {
    make = 'Electric CarC';
    doors = 4
}
class Truck extends CarC {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends CarC> (carC: T): T {
    console.log(`All ${carC.doors} doors are closed.`);
    console.log(`The ${carC.make} is now accelerating!`)
    return carC
}

let myElectricCar = new ElectricCarC;
accelerate<ElectricCarC>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);