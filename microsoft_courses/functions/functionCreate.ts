function displayAlert(message: string) {
    alert(message);
}

function addNumbers(input: number[]): number{
    let result: number = 0;
    input.forEach(value => {
        if (isNaN(value)) {
        }
        result = result + value
    });
    return result;
}

console.log(addNumbers([1,2,3,4,5]))


// Implementing REST parameters
let addNumbersREST= (...input: number[]):number => {
    let result: number = 0;
    input.forEach(element => {
        result += element;
    });
    return result;
}

console.log(addNumbersREST(1, 2, 3, 4, 5, 6))

// Destructuring parameters
interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: 'Christopher', text: 'hello, world' });


// NOTE: Using a type to do the process

// Create the type as an arrow function
type calculator = (a: number, b: number) => number;

// add function
function sumNumbers(a: number, b: number): number {
    return a + b;
}

// Sub function
function subtractNumbers(a: number, b: number): number {
    return a - b;
}

// Calculate function
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return sumNumbers;
    } else {
        return subtractNumbers;
    }
}

// To call the function with the type, use the first argument operation and the
// second argument of the type numbers (a, b)
console.log(doCalculation("add")(54, 6));