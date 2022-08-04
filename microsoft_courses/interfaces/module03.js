"use strict";
let myIceCream = {
    flavor: "vanilla",
    scoops: 4,
    sauce: 'chocolate',
    nuts: true
};
function tooManyScoops(dessert) {
    return dessert.scoops >= 4
        ? dessert.scoops + " is too many scoops!" + "[" + dessert.nuts + "]"
        : "You order will be ready soon!";
}
console.log(tooManyScoops(myIceCream));
let myIceCreamIndex;
// I can create interface with index value to check the value in an array
myIceCreamIndex = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCreamIndex[0];
console.log(myStr);
