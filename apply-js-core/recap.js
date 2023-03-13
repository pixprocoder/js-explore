// 1. variable
// var name = "myName";
let myVar1 = "hello";
const myVAr2 = "world";
// math operation: +, -, *, /
// shorthand: +=, -=, *=, /=, ++, --

// 2. Array
var friends = ["amin", "abid mia", "tahmid", "ab rohman", "labib"];
var thirdFriend = friends[2];
friends[3] = "Abdullah";

// 3. conditions
// <, > , <=, >=, ==, ===, !=, !==
if (friends.length < 3) {
  // do some work
} else {
  // do other things
}

// 4. loops
let number = 0;
while (number <= 10) {
  // do work
  number++;
}

for (let i = 0; i <= 10; i++) {
  // do work
}

// 5. function
function isSmart(boy) {
  if (boy.toLowerCase() === "sk") return true;
  return false;
}
const parson = isSmart("sk");
console.log(parson);

// 6. object
var product = {
  name: "bottle",
  color: "red",
  price: 323,
};
// access object property
// option 1 (Dot notation:)
const op1 = product.price;
// option 2 (Bracket notation: )
const op2 = product["name"];
// option 3 (Object destructuring:)
const { name, color } = product;
// option 4 (Object.keys() )
const keys = Object.keys(product);
// option 5 (Object.values(): )
const values = Object.values(product);
// option 6
const op6 = Object.entries(product);
// option 7
for (let prop in product) {
  console.log(prop + ": " + product[prop]);
}
