
type compareFunctionType = (a: number, b:number) => number;
let sortDescending:compareFunctionType = (a: number, b: number) => {
   if (a > b) {
       return -1;
   } else if (b > a) {
       return 1;
   } else {
       return 0;
   }
}

let sortAscending:compareFunctionType = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }
function buildArray(items: number, sorted: 'ascending' | 'descending'): number[] {
    let randomValues: number[] = [];
    let nextNumber: number;

     for (let counter = 0; counter < items; counter++) {
       nextNumber = Math.ceil(Math.random() * (100 - 1));
       if (randomValues.indexOf(nextNumber) === -1) {
         randomValues.push(nextNumber);
       } else {
         counter--;
         }
    }
    
   if (sorted === 'ascending') {
     return randomValues.sort(sortAscending);
   } else {
     return randomValues.sort(sortDescending);
   }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);