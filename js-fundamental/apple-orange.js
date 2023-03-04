// Practice problem 1
// ---------------------------

/**
 * Rahim's mom give him 5291 taka and send him to the shop to bay apples and oranges. now we know the apple price is 1034 taka and orange price is 3045 taka. I have to write a program that calculate the remaining money given by the shop holder to rahim.
 */

// mom's money
var givenMomMoney = 5291;

// apple and orange price
var applePrice = 1034;
var orangePrice = 3045;

// total Expenses
var totalExpenses = applePrice + orangePrice;
console.log(totalExpenses);

// get returned by the shop holder
var getReturn = givenMomMoney - totalExpenses;
console.log("The answer is: ", getReturn);
