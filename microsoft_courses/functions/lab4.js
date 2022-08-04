var sortDescending = function (a, b) {
    if (a > b) {
        return -1;
    }
    else if (b > a) {
        return 1;
    }
    else {
        return 0;
    }
};
var sortAscending = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (b > a) {
        return -1;
    }
    else {
        return 0;
    }
};
function buildArray(items, sorted) {
    var randomValues = [];
    var nextNumber;
    for (var counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomValues.indexOf(nextNumber) === -1) {
            randomValues.push(nextNumber);
        }
        else {
            counter--;
        }
    }
    if (sorted === 'ascending') {
        return randomValues.sort(sortAscending);
    }
    else {
        return randomValues.sort(sortDescending);
    }
}
var myArray1 = buildArray(12, 'ascending');
var myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);
