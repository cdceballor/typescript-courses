// Define a class: constructor, getter and setter and methods:
class Car {
    // NOTE: We write the _ in the properties because help us to define the
    // values that we can use with the setter and getter methods
    private _make: string;
    private _color: string;
    private _doors: number;
    // Static value
    private static _numberOfCars = 0;

    // Constructor
    constructor(make: string, color: string, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        // Call the number of cars- Note: don't use the this, because we are doing reference to the property.
        Car._numberOfCars++;
    }

    public static getNumberOfCars(): number{
        return Car._numberOfCars;
    }

    // get and set (Accessors)
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return "The color of the car is " + this._color;
    }
    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    // Methods
    // Worker is a method that return the value make by de constructor
    protected worker(): string{
        return this._make;
    }
    accelerate(speed: number): string{
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string{
        return `${this.worker()} is braking with the standard.`
    }
    turn(direction: 'left' | 'right'): string{
        return `${this.worker()} is turning ${direction}`
    }
}

// Create the instance:
let MyCar = new Car('cool car company', 'black', 4);
let MyCar2 = new Car('cool car company', 'yellow', 4);
// console.log(MyCar._color); Can access because now is private and only has access by the constructor
console.log(MyCar.color);
console.log(MyCar.accelerate(24));
console.log(MyCar.brake());
console.log(MyCar.turn("left"));

console.log(Car.getNumberOfCars());

// ********************************************** EXTEND ******************************************************
class ElectricCar extends Car {
    private _range: number;
    constructor(make:string, color:string, doors:number, range: number) {
        // Use the super to define the attributes of the principal class
        super(make, color, doors);
        this._range = range;
    }

    get range(): number {
        return this._range;
    }
    set range(range: number) {
        this._range= range;
    }
    charge() {
        console.log("The " + this.worker() + " has changed");
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263, 2);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
