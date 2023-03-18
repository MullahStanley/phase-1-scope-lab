// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "Jane";
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}
customerName();
function setBestCustomer() {
  const bestCustomer= "not bob";
  console.log(bestCustomer);
}
setBestCustomer();
function overwriteBestCustomer() {
  const bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "John";
}