// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmploee = {...employee};
    updatedEmploee[key] = value;
    return updatedEmploee;
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"));
console.log(employee.streetAddress);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"));

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmploee = {...employee};
    delete updatedEmploee[key];
    return updatedEmploee;
}
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"));