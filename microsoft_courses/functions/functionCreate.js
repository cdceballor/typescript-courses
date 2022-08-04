function displayAlert(message) {
    alert(message);
}
function addNumbers(input) {
    var result = 0;
    input.forEach(function (value) {
        if (isNaN(value)) {
        }
        result = result + value;
    });
    return result;
}
console.log(addNumbers([1, 2, 3, 4, 5]));
// Implementing REST parameters
var addNumbersREST = function () {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    var result = 0;
    input.forEach(function (element) {
        result += element;
    });
    return result;
};
console.log(addNumbersREST(1, 2, 3, 4, 5, 6));
