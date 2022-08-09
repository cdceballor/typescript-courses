// We can define all the attributes and methods in an interface to later implement it
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Cars implements Vehicle {
    make: string;
    color: string;
    doors: number;

    constructor(make: string, color: string, doors: number) {
        this.make = make;
        this.color = color;
        this.doors= doors;
    }

    accelerate(speed: number): string {
        throw new Error("Method not implemented.");
    }
    brake(): string {
        throw new Error("Method not implemented.");
    }
    turn(direction: "left" | "right"): string {
        throw new Error("Method not implemented.");
    }
    
}