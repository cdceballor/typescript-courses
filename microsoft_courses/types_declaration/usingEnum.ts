enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(employeeStatus); // 1
// Using provider index
console.log(ContractStatus[employeeStatus]); // Temp
