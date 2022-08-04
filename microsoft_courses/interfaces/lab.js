var debt = {
    principal: 30000, interestRate: 5
};
var debt2 = {
    principal: 200000, interestRate: 5, months: 6
};
function calculateInterestOnlyLoanPayment(loanTerms) {
    var interest = loanTerms.interestRate / 1200;
    var payment = loanTerms.principal * interest;
    return 'The interest only loan payment is: ' + payment.toFixed(2);
}
var interestOnlyPayment = calculateInterestOnlyLoanPayment(debt);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
// Lab 2
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    var interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
var lab2Result = calculateConventionalLoanPayment(debt2);
console.log(lab2Result);
