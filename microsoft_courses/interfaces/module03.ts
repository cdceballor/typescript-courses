interface IceCream {
  flavor: string;
    scoops: number;
    instructions?: string // optional
}

// Interface extends
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: "vanilla",
    scoops: 4,
    sauce: 'chocolate',
    nuts: true
};


function tooManyScoops(dessert: Sundae) {
  return dessert.scoops >= 4
    ? dessert.scoops + " is too many scoops!" + "[" + dessert.nuts + "]"
    : "You order will be ready soon!";
}

console.log(tooManyScoops(myIceCream));

// Indexed interface

interface IceCreamArray{
    // An index type number return a string
    [index: number]: string;
}

let myIceCreamIndex: IceCreamArray;
// I can create interface with index value to check the value in an array
myIceCreamIndex = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCreamIndex[0];
console.log(myStr);