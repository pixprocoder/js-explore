// Main Array
var fruits = ["Apple", "Banana", "Orange"];

// Finding the index of banana
var bananaIndex = fruits.indexOf("Banana");

// Replace banana with mango
fruits[bananaIndex] = "Mango";

// Remove Orange
fruits.pop();

// Add Watermelon
fruits.push("watermelon");

// Result
console.log("The answer is: ", fruits);
