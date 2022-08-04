// Lab 1
interface Loan {
    principal: number;
    interestRate: number;
}

interface ConventionalLoan extends Loan {
    months:number;
}

const debt: Loan = {
    principal: 30000, interestRate: 5
}

const debt2: ConventionalLoan = {
    principal:200000, interestRate:5, months:6
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string{
    let interest = loanTerms.interestRate / 1200;
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is: ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment(debt);
console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00"

// Lab 2
function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
   // Calculates the monthly payment of a conventional loan
   let interest: number = loanTerms.interestRate / 1200;   // Calculates the Monthly Interest Rate of the loan
   let payment: number;
   payment = loanTerms.principal * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
   return 'The conventional loan payment is ' + payment.toFixed(2);
}

let lab2Result = calculateConventionalLoanPayment(debt2);
console.log(lab2Result);